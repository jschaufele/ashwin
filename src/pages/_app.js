import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import { initializeIcons } from "@fluentui/react";
import { GlobalCss } from "../containers/styles/globalcss";
import { Authenticate } from "../helpers/authorization/authenticate";

function App({ Component, pageProps }) {
	const apolloClient = useApollo(pageProps.initialApolloState);
	initializeIcons(undefined, { disableWarnings: true });

	return (
		<ApolloProvider client={apolloClient}>
			<Head>
				<title>J6</title>
				<meta property="og:title" content="My Meetings365" key="title" />
				<link rel="stylesheet" type="text/css" href="/css/app_global.css" />
			</Head>
			<GlobalCss />
			<Authenticate client={apolloClient}>
				<Component {...pageProps} />
			</Authenticate>
		</ApolloProvider>
	);
}

export default App;
