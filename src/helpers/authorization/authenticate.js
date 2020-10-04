import React, { Component } from "react";
import { urlRedirect } from "../../helpers/utilities";
import { DEBUG, TRACE, ERROR, WARN, INFO } from "../../helpers/loggingRtns";
import { PagesInfo } from "../../helpers/constants/pagenames";
import { userVar, initUser, apolloClientVar } from "../../apollo/cachevars";

import { getAccount } from "../../helpers/authorization/authRedirect";
import userMutations from "../../apollo/operations/mutations/user";
let tempUser = initUser;
tempUser.isLoggedIn = true;
export class Authenticate extends Component {
	constructor(props) {
		super(props);
		apolloClientVar(this.props.client);
	}
	state = { user: tempUser };

	async componentDidMount() {
		INFO("---Before Authenticate test ", this.props.children, JSON.stringify(userVar()));
		userVar(tempUser);
		if (!userVar().isLoggedIn) {
			let u = initUser;
			try {
				u = getAccount();
				console.log("----Authenticate 1--", u);
				u = userMutations.NormalizeUserFromToken(u?.idTokenClaims);
			} catch (e) {
				console.log("----Authenticate error --", e);
				u = initUser;
			}
			userVar(u);
		}

		this.setState({
			isLoading: false,
			user: userVar(),
		});
		INFO("---Authenticate redirect --->1 this.state", this.state);
		if (this.state.user && !this.state.user.isLoggedIn) {
			INFO("---withAuthentcate redirect --->2");
			urlRedirect(PagesInfo.NotAuthorized);
		}
		//urlRedirect(PagesInfo.Dashboard.FullPath);
	}
	render() {
		INFO("---Authenticate --->render", this.props.children, JSON.stringify(this.state));
		if (this.state.user && this.state.user.isLoggedIn) {
			return <>{this.props.children}</>;
		}
		return (
			<>
				<a href={PagesInfo.Dashboard.FullPath}></a>
			</>
		);
	}
}

export default Authenticate;
