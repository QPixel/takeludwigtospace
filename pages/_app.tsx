import { AppProps } from "next/dist/next-server/lib/router/router";
import { useEffect } from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../styling/theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import Head from "next/head";
import { CssBaseline } from "@material-ui/core";
import React from "react";

export const cache = createCache({key: "css", prepend: true});

export default function App({Component, pageProps}: AppProps): React.FC {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
	}, []);

	return (
		<CacheProvider value={cache}>
			<Head>
				<title>Take Ludwig to Space!</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}