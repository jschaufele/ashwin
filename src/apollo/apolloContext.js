import React from "react";
const ApolloClientContext = React.createContext(() => {});
const ApolloClientProvider = (props) => {
	return <ApolloClientContext.Provider value={props.client}>{props.children}</ApolloClientContext.Provider>;
};
export { ApolloClientProvider, ApolloClientContext };
