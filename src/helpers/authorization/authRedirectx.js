import { errors, errorCodes } from "../errors";
import { msalConfig, loginRequest, tokenRequest } from "./authConfig";
import { b2cPolicies } from "./policies";
import { isNotWindow } from "../utilities";
const getMsal = () => {
	if (isNotWindow) {
		return null;
	}
	return new Msal.UserAgentApplication(msalConfig);
};
let authResult = {};
const getTokenRedirect = (request) => {
	return getMsal
		.acquireTokenSilent(request)
		.then((response) => {
			if (response.accessToken) {
				//	accessTokenVar(response.accessToken);
				logMessage("Request made to Web API:");

				// if (accessTokenVar()) {
				// 	try {
				// 		callApiWithAccessToken(apiConfig.webApi, accessTokenVar());
				// 	} catch (err) {
				// 		console.log(err);
				// 	}
				// }
			}
		})
		.catch((error) => {
			console.log("Silent token acquisition fails. Acquiring token using redirect");
			console.log(error);
			// fallback to interaction when silent call fails
			return getMsal.acquireTokenRedirect(request);
		});
};

const passTokenToApi = () => {
	if (!accessTokenVar()) {
		getTokenRedirect(tokenRequest);
	} else {
		logMessage("Request made to Web API:");
		try {
			callApiWithAccessToken(apiConfig.webApi, accessTokenVar());
		} catch (err) {
			console.log(err);
		}
	}
};

const redirectCallBack = (e, r) => {};
export const redirect = async () => {
	console.log("---redirect 1---");
	const omsal = getMsal();
	console.log("---redirect 2---");
	if (!omsal) return { ...{}, ...errors.errorLoginFailed() };
	console.log("---redirect 3---");
	if (!omsal.hasOwnProperty("handleRedirectCallback")) return { ...{}, ...errors.errorLoginFailed() };
	console.log("---redirect 4---");
	await omsal().handleRedirectCallback(authRedirectCallBack);
	console.log("---redirect 5---");
	//await getMsal.handleRedirectCallback(redirectCallBack);
	return getAccount();
};
export const getAccount = () => {
	const omsal = getMsal();

	console.log("----getaccoount  in -->", omsal);

	if (!omsal) return { ...{}, ...errors.errorLoginFailed() };
	if (!omsal.hasOwnProperty("getAccount")) return { ...{}, ...errors.errorLoginFailed() };
	omsal.hasOwnProperty("getAccount");
	//if (typeof omsal().getAccount !== "function") return { ...{}, ...errors.errorLoginFailed() };
	console.log("----getaccoount out- 1->", typeof omsal);
	console.log("----getaccoount out- 2->", omsal.hasOwnProperty("getAccount"));
	return omsal().getAccount();
};
export const signIn = () => {
	const omsal = getMsal();

	console.log("-----signIn---->", omsal);

	if (!omsal) return void 0;
	omsal().loginRedirect(loginRequest);
};

// sign-out the user
export const logout = () => {
	// Removes all sessions, need to call AAD endpoint to do full logout
	const omsal = getMsal();
	if (!omsal) return void 0;
	omsal().logout();
};
const authRedirectCallBack = (error, response) => {
	console.log("--------authRedirectCallBack-->");

	if (error) {
		console.log("--------authRedirectCallBack-->error-->", error);
		let e = errors.errorLoginFailed();
		// Check for forgot password error
		// Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
		if (error.errorMessage.indexOf("AADB2C90118") > -1) {
			try {
				// Password reset policy/authority
				getMsal.loginRedirect(b2cPolicies.authorities.forgotPassword);
			} catch (err) {
				e = errors.errorLoginFailed(JSON.stringify(err));
			}
		}
		authResult = e;
		return;
	}
	console.log("--------authRedirectCallBack--> after -->", response);
	if (response.tokenType === "id_token" && response.idToken.claims["tfp"] !== b2cPolicies.names.signUpSignIn) {
		console.log(
			'------response.tokenType === "id_token" && response.idToken.claims["tfp"] !== b2cPolicies.names.signUpSignIn'
		);

		getMsal.logout();
		window.alert("Password has been reset successfully. \nPlease sign-in with your new password.");
		authResult = errors.errorPasswordChanged();
		return;
	}

	if (response.tokenType === "id_token" && response.idToken.claims["tfp"] === b2cPolicies.names.signUpSignIn) {
		console.log("id_token acquired at: " + new Date().toString());

		let accountInfo = getMsal().getAccount();
		console.log("-----account info, response--->", accountInfo, response);
		if (accountInfo) {
			//	accessTokenVar(accountInfo);
			authResult = { ...accountInfo, ...errors.errorSuccess() };
			console.log("-----account info , return -->", authResult);

			return;
		}
		authResult = errors.errorLoginFailed(JSON.stringify(err));
		return;
	}
	if (response.tokenType === "access_token") {
		console.log("access_token acquired at: " + new Date().toString());
		//	accessTokenVar(response.accessToken);
		logMessage("Request made to Web API:");

		alert("ACCESS TOKEN--> look at console");
		console.log('-------------response.tokenType === "access_token"-->', response);
		let accountInfo = getMsal.getAccount();
		console.log("-----account info, response--->", accountInfo, response);
		if (accountInfo) {
			console.log("-----account info , return -->", accountInfo, { ...accountInfo, ...errors.errorSuccess() });

			//		accessTokenVar(accountInfo);
			authResult = { ...accountInfo, ...errors.errorSuccess() };
			return;
		}
		authResult = errors.errorLoginFailed(JSON.stringify(err));
		return;
	}

	alert("TOKEN TYPE--> look at console");
	authResult = errors.errorLoginFailed(JSON.stringify(response.tokenType));
	return;
};
