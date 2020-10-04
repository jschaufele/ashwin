import { userVar, initUser } from "../../../cachevars";
// function updateUser(currUser) {
// 	console.log("-----currme->", currUser);

// 	return (newUser, cb) => {
// 		userVar({ ...currUser, ...newUser });
// 		if (cb) {
// 			cb(userVar());
// 		}
// 		console.log("-----currme 2->", userVar());
// 		return userVar();
// 	};
// }
function NormalizeUserFromToken(currUser) {
	return (userToken) => {
		let u = initUser;
		if (userToken) {
			console.log("-----NormalizeUserFromToken--->", userToken);

			u.id = userToken.sub;
			u.name = userToken.name;
			u.name = userToken.name;
			u.email = userToken.emails[0];
			u.isLoggedIn = true;
		}
		u = { ...currUser, ...u };
		console.log("---updateUserFromToken 1-->", u);
		return { ...currUser, ...u };
	};
}
export const userMutations = {
	//	setUser: updateUser(userVar()),
	getUserInfo: userVar(),
	NormalizeUserFromToken: NormalizeUserFromToken(userVar()),
};
