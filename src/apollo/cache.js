import { useMemo } from "react";
import { InMemoryCache, gql } from "@apollo/client";
import { makeVar } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { userVar, meVar, accessTokenVar, apolloClientVar, initUser, langVar } from "./cachevars";

import userMutations from "./operations/mutations/user";

import Auth, { getAccount } from "../helpers/authorization/authRedirect";
export const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				lang: {
					read() {
						return langVar();
					},
				},
				user: {
					read() {
						return userVar();
						console.log("----read cache-- user read !", JSON.stringify(userVar()));
						if (!userVar().isLoggedIn) {
							//let u = initUser;
							let u = null;
							try {
								//u = Auth().getAccount();
								u = getAccount();
								console.log("----read cache try --", u);
								u = userMutations.NormalizeUserFromToken(u?.idTokenClaims);
							} catch (e) {
								console.log("----read cache  error --", e);
								u = initUser;
							}
							console.log("---read cache--last", JSON.stringify(userVar()));
						}
						console.log("---read cache--BEFORE RETURN", JSON.stringify(userVar()));
						return userVar();
					},

					// 	merge() {
					// 		console.log("---merge cache--", incoming, existing);
					// 		return { ...existing, ...incoming };
					// 	},
				},
				me: {
					read() {
						return meVar();
					},
				},
				accessToken: {
					read() {
						return accessTokenVar();
					},
				},
				apolloClient: {
					read() {
						return apolloClientVar();
					},
				},
			},
		},
	},
});
export const GET_ACCESS_TOKEN = gql`
	query getAccessToken {
		accessToken @client
	}
`;
