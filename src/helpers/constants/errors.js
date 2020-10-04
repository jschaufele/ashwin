const LITERALS = require("./literals");
const errorCodes = {
	SUCCESS: 0,
	FAILED: -1,
	SYSTEM: 10001,
	GENERAL: 10002,
	NOT_FOUND: 10003,
	BAD_REQUEST: 10004,
	USER_NOT_FOUND: 10005,
	LOGIN_FAILED: 10006,
	LOGOUT_FAILED: 10007,
	LOGOUT_SUCCESSFUL: 10008,
	PASSWORD_CHANGED: 10009,
};
const errorMessages = {};
errorMessages[errorCodes.SUCCESS] = { code: errorCodes.SUCCESS, message: { "en-us": "Success" }, result: "SUCCESS" };
errorMessages[errorCodes.FAILED] = { code: errorCodes.FAILED, message: { "en-us": "Failed" }, result: "ERROR" };
errorMessages[errorCodes.NOT_FOUND] = {
	code: errorCodes.NOT_FOUND,
	message: { "en-us": "Not Found" },
	result: "ERROR",
};
errorMessages[errorCodes.SYSTEM] = {
	code: errorCodes.SYSTEM,
	message: { "en-us": "System Error " },
	result: "SYSTEM ERROR",
};
errorMessages[errorCodes.GENERAL] = {
	code: errorCodes.GENERAL,
	message: { "en-us": "General Error " },
	result: "GENERAL ERROR",
};
errorMessages[errorCodes.BAD_REQUEST] = {
	code: errorCodes.BAD_REQUEST,
	message: { "en-us": "Bad Request" },
	result: "BAD REQUEST",
};
errorMessages[errorCodes.USER_NOT_FOUND] = {
	code: errorCodes.USER_NOT_FOUND,
	message: { "en-us": "User Not Found" },
	result: "USER NOT FOUND",
};
errorMessages[errorCodes.LOGIN_FAILED] = {
	code: errorCodes.LOGIN_FAILED,
	message: { "en-us": "Login failed. Reason-> %0" },
	result: "LOGIN FAILED",
};
errorMessages[errorCodes.LOGOUT_FAILED] = {
	code: errorCodes.LOGOUT_FAILED,
	message: { "en-us": "Login failed. Reason-> %0" },
	result: "LOGOUT FAILED",
};
errorMessages[errorCodes.LOGOUT_SUCCESSFUL] = {
	code: errorCodes.LOGOUT_SUCCESSFUL,
	message: { "en-us": "Logout Successful" },
	result: "LOGOUT SUCCESSFUL",
};
errorMessages[errorCodes.PASSWORD_CHANGED] = {
	code: errorCodes.PASSWORD_CHANGED,
	message: { "en-us": "Password Changed" },
	result: "Password Changed",
};
const errors = {
	error(id, ln) {
		if (!ln) {
			ln = LITERALS.LANGUAGE;
		}
		return this.formatErrorResult({
			result: errorMessages[id].result,
			code: errorMessages[id].code,
			message: errorMessages[id].message[ln],
		});
	},
	errorEx(id, msg, ln) {
		if (!ln) {
			ln = LITERALS.LANGUAGE;
		}
		return this.formatErrorResult({
			result: errorMessages[id].result,
			code: errorMessages[id].code,
			message: errorMessages[id].message[ln].replace("%0", msg),
		});
	},
	errorSystem(code, message, ln) {
		if (!ln) {
			ln = LITERALS.LANGUAGE;
		}

		if (!message) {
			message = "";
		}
		var c = errorMessages[errorCodes.SYSTEM];
		try {
			c = errorMessages[code];
		} catch (error) {
			c = errorMessages[errorCodes.SYSTEM];
		}
		return this.formatErrorResult({
			result: `${errorMessages[c.code].result} - ${message}`,
			code: errorMessages[c.code].code,
			message: message == "" ? `${errorMessages[c.code].message[ln]}` : message,
		});
	},
	errorSuccess(ln) {
		return this.error(errorCodes.SUCCESS, ln);
	},
	errorFailed(ln) {
		return this.error(errorCodes.FAILED, ln);
	},
	errorNotFound(ln) {
		return this.error(errorCodes.NOT_FOUND, ln);
	},
	errorLoginFailed(msg, ln) {
		if (msg) {
			return this.errorEx(errorCodes.LOGIN_FAILED, msg, ln);
		}
		return this.error(errorCodes.LOGIN_FAILED, ln);
	},
	errorPasswordChanged(ln) {
		return this.error(errorCodes.PASSWORD_CHANGED, ln);
	},
	createErrorMessage(code, message) {
		// ad hoc errors
		return this.formatErrorResult({ code: code, message: message });
	},
	formatErrorResult(r) {
		return { resultCode: { ...r } };
	},
	processHttpError(e, ln) {
		if (!ln) {
			ln = "en-us";
		}
		var err = {};
		if (e.extensions) {
			if (e.extensions.code) {
				err["code"] = "" + e.extensions.code;
				err["message"] = e.message;
			} else if (e.extensions.response) {
				err["code"] = "" + e.extensions.response.status;
				err["message"] = e.extensions.response.statusText;
			} else {
				err["code"] = "" + errorCodes.SYSTEM;
				err["message"] = errorMessages[errorCodes.GENERAL].message[ln];
			}
		} else if (e.code) {
			err["code"] = "" + e.code;
			err["message"] = "" + e.message;
		} else {
			err["code"] = "" + errorCodes.GENERAL;
			err["message"] = errorMessages[errorCodes.GENERAL].message[ln];
		}
		console.log(`------>err---->${err}<---`, err, "<->", e);
		var r;
		switch (err.code) {
			case "400":
			case "404":
				console.log("----->404,400-->");
				r = this.errorNotFound(ln);
				break;
			default:
				r = this.errorSystem(err.code, err.message, ln);
		}
		return r; // r is already formatted -
	},
};

module.exports = { errors, errorCodes };
