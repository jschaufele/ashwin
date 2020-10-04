import * as React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { Stylesheet, InjectionMode, resetIds } from "@fluentui/react";

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const stylesheet = Stylesheet.getInstance();
		stylesheet.setConfig({
			injectionMode: InjectionMode.none,
			namespace: "server",
		});
		stylesheet.reset();
		resetIds();

		const page = renderPage((App) => (props) => <App {...props} />);
		stylesheet.insertRule("body");
		return { ...page, styleTags: stylesheet.getRules(true) };
	}

	render() {
		function LoadTools() {
			if (!process.env.NEXT_PUBLIC_DEV) {
				return <script>window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};</script>;
			}

			return <></>;
		}

		return (
			<html>
				<Head>
					<style
						type="text/css"
						dangerouslySetInnerHTML={{
							__html: this.props.styleTags,
						}}
					/>

					<script src="/secure/js/msal.min.js"></script>
					<LoadTools />
				</Head>
				<body style={{ overflowY: "hidden" }}>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
