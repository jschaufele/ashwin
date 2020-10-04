const PagesInformation = function () {
	const p = {
		QueryParams: {
			Action: "action",
			Logout: "logout",
			Login: "login",
			Error: "error",
			ErrorCodes: {
				LoginFailed: "loginfailed",
				LoginNotFound: "loginnotfound",
				NotAuthorized: "notauthorized",
			},
		},
		Root: "/",
		Authorize: {
			FullPath: "/secure/authorize",
			Relative: "/dashboard",
			PublicAuthorize: "/authorize",
		},
		Dashboard: {
			FullPath: "/secure/dashboard",
			Relative: "/dashboard",
		},
		Attendees: {
			FullPath: "/secure/attendees",
			Relative: "/attendees",
		},
	};

	const Template = function (q, v) {
		return `${q}=${v};`;
	};
	const UrlTemplate = function (u, q, v) {
		if (u.indexOf("?") > -1) {
			u = u + "&";
		} else {
			u = u + "?";
		}
		return `${u}${q}=${v}`;
	};
	const Logout = () => {
		return UrlTemplate(p.Authorize.FullPath, p.QueryParams.Action, p.QueryParams.Logout);
	}; // "/secure/autorize/action=signout",
	const Login = () => {
		return UrlTemplate(p.Authorize.FullPath, p.QueryParams.Action, p.QueryParams.Login);
	};
	const PublicLogin = function () {
		return UrlTemplate(p.Authorize.PublicAuthorize, p.QueryParams.Action, p.QueryParams.Login);
	};
	const PublicLogout = () => {
		return UrlTemplate(p.Authorize.PublicAuthorize, p.QueryParams.Action, p.QueryParams.Logout);
	};
	const LoginFailed = () => {
		return UrlTemplate(p.Root, p.QueryParams.Error, p.QueryParams.ErrorCodes.LoginFailed);
	};
	const LoginNotFound = () => {
		return UrlTemplate(p.Root, p.QueryParams.Error, p.QueryParams.ErrorCodes.LoginFailed);
	};
	const NotAuthorized = () => {
		return UrlTemplate(p.Root, p.QueryParams.Error, p.QueryParams.ErrorCodes.NotAuthorized);
	};

	return {
		constants: p,
		PublicLogin: PublicLogin(),
		NotAuthorized: NotAuthorized(),
		LoginNotFound: LoginNotFound(),
		LoginFailed: LoginFailed(),
		PublicLogout: PublicLogout(),
		Login: Login(),
		Logout: Logout(),
	};
};

const fn = {
	constants: PagesInformation().constants,
	PublicLogin: PagesInformation().PublicLogin,
	NotAuthorized: PagesInformation().NotAuthorized,
	LoginNotFound: PagesInformation().LoginNotFound,
	LoginFailed: PagesInformation().LoginFailed,
	PublicLogout: PagesInformation().PublicLogout,
	Login: PagesInformation().Login,
	Logout: PagesInformation().Logout,
};
export const PagesInfo = { ...PagesInformation().constants, ...fn };
