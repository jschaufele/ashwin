/**
 * Config object to be passed to MSAL on creation.
 * For a full list of msal.js configuration parameters,
 * visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_configuration_.html
 * */

import { b2cPolicies } from "./policies";
import { apiConfig } from "./apiConfig";
export const msalConfig = {
	auth: {
		clientId: "69905003-2d5c-4643-b14d-7f535ebd605a",
		authority: b2cPolicies.authorities.signUpSignIn.authority,
		validateAuthority: false,
		//redirectUri: "http://localhost:6420/dashboard/",
		redirectUri: "http://localhost:3000/authorize/",
		postLogoutRedirectUri: "http://localhost:3000/",
	},
	cache: {
		cacheLocation: "localStorage", // This configures where your cache will be stored
		storeAuthStateInCookie: false, // Set this to "true" to save cache in cookies to address trusted zones limitations in IE (see: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/Known-issues-on-IE-and-Edge-Browser)
	},
};

/**
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters,
 * visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
 */
export const loginRequest = {
	scopes: ["openid", "profile"],
};

// Add here scopes for access token to be used at the API endpoints.
export const tokenRequest = {
	scopes: apiConfig.b2cScopes, // e.g. ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
};
