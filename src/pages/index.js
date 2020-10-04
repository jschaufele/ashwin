import React from "react";
import { DEBUG, TRACE, ERROR, WARN, INFO } from "../helpers/loggingRtns";
import { PagesInfo } from "../helpers/constants/pagenames";
import { userVar, initUser } from "../apollo/cachevars";
import { urlRedirect } from "../helpers/utilities";
let tempUser = initUser;
tempUser.isLoggedIn = true;
userVar(tempUser);
const SecureIndexPage = () => {
	INFO("---SecurePage page--->enter");
	const user = userVar();
	INFO("---SecurePage page--->user->", JSON.stringify(user));
	if (user.isLoggedIn) {
		urlRedirect(PagesInfo.Dashboard.FullPath);
	}
	urlRedirect(PagesInfo.PublicLogin);

	return <></>;
};
export default SecureIndexPage;
