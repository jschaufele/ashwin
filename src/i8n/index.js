import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { DEBUG, TRACE, ERROR, WARN, INFO } from "../helpers/loggingRtns";
import { lang as en } from "./en";
import { lang as es } from "./es";
import { langVar, apolloClientVar, userVar } from "../apollo/cachevars";
import { ApolloClientContext } from "../apollo/apolloContext";
function index(obj, i) {
	return obj[i];
}
const GET_LANG = gql`
	query GetUser {
		lang @client
	}
`;

const trans = (text, ln) => {
	INFO("-----trans userVar()-->- 2- >", userVar());

	let lang = userVar().lang.split("-")[0];
	let currentLang = lang == "es" ? es : en;
	console.log(`----LANG-->`, userVar().lang, lang, currentLang);
	let v = (text + "").split(".").reduce(index, currentLang);
	console.log("IN-->" + text + "--" + v + "--" + currentLang + "@@" + langVar() + "--->", JSON.stringify(userVar()));
	return v;
};

export { trans };
//export { i18nContext, i18Provider,trans };
