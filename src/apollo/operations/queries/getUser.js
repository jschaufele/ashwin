import { gql } from "@apollo/client";
import { userVar, initUser } from "../../cachevars";
export const GET_USER = gql`
	query GetUser {
		user @client {
			id
			name
			accessToken
			isLoggedIn
		}
	}
`;
export const getUserVar = userVar();
//d: "", name: "", accessToken: "", me: {}, isLoggedIn: false
