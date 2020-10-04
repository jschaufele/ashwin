import { errors, errorCodes } from "../errors";
import { msalConfig, loginRequest, tokenRequest } from "./authConfig";
import { b2cPolicies } from "./policies";
import isEmpty from "lodash/isEmpty";
//import { accessTokenVar } from "../apollo/cache";

let authResult = {};
const Auth = function () {
	if (typeof window == "undefined")
		return {
			signIn: () => {
				console.log("signIn first one");
				void 0;
			},
			logout: () => void 0,
			getAccount: () => errors.errorLoginFailed(),
			redirect: () => void 0,
		};
	authResult = {};
	const myMSALObj = new Msal.UserAgentApplication(msalConfig);
	function authRedirectCallBack(error, response) {
		console.log("--------authRedirectCallBack-->");

		if (error) {
			console.log("--------authRedirectCallBack-->error-->", error);
			let e = errors.errorLoginFailed();
			// Check for forgot password error
			// Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
			if (error.errorMessage.indexOf("AADB2C90118") > -1) {
				try {
					// Password reset policy/authority
					myMSALObj.loginRedirect(b2cPolicies.authorities.forgotPassword);
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

			myMSALObj.logout();
			window.alert("Password has been reset successfully. \nPlease sign-in with your new password.");
			authResult = errors.errorPasswordChanged();
			return;
		}

		if (response.tokenType === "id_token" && response.idToken.claims["tfp"] === b2cPolicies.names.signUpSignIn) {
			console.log("id_token acquired at: " + new Date().toString());

			let accountInfo = myMSALObj.getAccount();
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
			let accountInfo = myMSALObj.getAccount();
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
	}

	// main method to get token with redirect flow
	function getTokenRedirect(request) {
		return myMSALObj
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
				return myMSALObj.acquireTokenRedirect(request);
			});
	}

	// calls the resource API with the token
	function passTokenToApi() {
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
	}

	function getAccount() {
		return myMSALObj.getAccount();
	}
	function signIn() {
		myMSALObj.loginRedirect(loginRequest);
	}

	// sign-out the user
	function logout() {
		// Removes all sessions, need to call AAD endpoint to do full logout
		myMSALObj.logout();
	}
	return {
		signIn: signIn,
		logout: logout,
		getAccount: () => {
			const user = myMSALObj.getAccount();
			if (isEmpty(user)) {
				return { ...user, ...errors.errorFailed() };
			}
			return { ...user, ...errors.errorSuccess() };
		},

		redirect: async function () {
			await myMSALObj.handleRedirectCallback(authRedirectCallBack);
			return this.getAccount();
		},
	};
};

export default Auth;
export const getAccount = () => {
	return Auth().getAccount();
};
export const signIn = () => {
	return Auth().signIn();
};
export const logout = () => {
	return Auth().logout();
};
export const redirect = () => {
	return Auth().redirect();
};
