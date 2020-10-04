import _ from "lodash";
import { useRouter } from "next/router";
import { userVar } from "../apollo/cachevars";
import { INFO } from "./loggingRtns";

export const clearUrl = (p) => {
	let u = p?.url;
	let r = p?.route;

	if (!u) {
		u = window.location.pathname;
	}
	let stateObj = { id: "100" };
	window.history.pushState(stateObj, u.substring(1), u);
};
export const urlRedirect = (url) => {
	if (isWindow) {
		window.location.href = url;
	}
};
export const isUndefined = (v) => typeof v !== "undefined";
export const isNotUndefined = (v) => !isUndefined(v);
export const isWindow = typeof window !== "undefined";
export const isNotWindow = !isWindow;
export default { isUndefined, isNotUndefined, isWindow, isNotWindow };
