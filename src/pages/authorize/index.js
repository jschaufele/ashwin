import React from "react";

import { DEBUG, TRACE, ERROR, WARN, INFO } from "../../helpers/loggingRtns";
import { signIn, getAccount, logout } from "../../helpers/authorization/authRedirect";
import { errorCodes } from "../../helpers/constants/errors";
import { PagesInfo } from "../../helpers/constants/pagenames";
import { clearUrl, urlRedirect } from "../../helpers/utilities";
import { userVar, initUser } from "../../apollo/cachevars";
import { Loadingthrobber } from "../../blocks/loadingthrobber";
import { useRouter } from "next/router";
let tempUser = initUser;
tempUser.isLoggedIn = true;
userVar(tempUser);
export const Authorize = () => {
	INFO("---authorize page---> secured 1");
	const data = { user: userVar() };
	const params = new URLSearchParams(window.location.search.toLowerCase());
	INFO("---authorize page---> secured 2", JSON.stringify(params), JSON.stringify(data));
	const action = params.get(PagesInfo.QueryParams.Action);
	INFO("---authorize page--->logout secured 3", action, PagesInfo.QueryParams.Logout);
	//
	//todo add check on action value
	//
	if (action == PagesInfo.QueryParams.Logout) {
		INFO("---authorize page--->logout secured 5");
		clearUrl();
		logout();
		return (
			<>
				<Loadingthrobber />
			</>
		);
	}
	INFO("---authorize page---> secured 6", JSON.stringify(data));
	if (data.user.isLoggedIn) {
		const r = useRouter();
		r.push(PagesInfo.Dashboard.Relative);
		return (
			<>
				<Loadingthrobber />
			</>
		);
	}
	INFO("---authorize page signin ---> secured 8", JSON.stringify(data));
	const r = getAccount();
	INFO("getAccount token string--->", JSON.stringify(r));
	if (r.resultCode?.code == errorCodes.SUCCESS) {
		const r = useRouter();
		r.push(PagesInfo.Dashboard.Relative);
	} else {
		INFO("---authorize page signin ---> secured 13", JSON.stringify(r));
		urlRedirect(PagesInfo.LoginFailed);
	}
	clearUrl();
	return (
		<>
			<Loadingthrobber />
		</>
	);
};
export default Authorize;
