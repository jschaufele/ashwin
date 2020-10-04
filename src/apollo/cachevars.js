import { makeVar } from "@apollo/client";
export const initUser = {
	id: "",
	name: "",
	accessToken: "",
	email: "your@emil.com",
	me: { email: "me@email.com" },
	isLoggedIn: false,
	lang: "en-en",
};

export const userVar = makeVar(initUser);
export const accessTokenVar = makeVar({});
export const meVar = makeVar(initUser);
export const apolloClientVar = makeVar(null);
export const langVar = makeVar("en-en");
export const tempVar = makeVar(null);
