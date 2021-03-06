import { AppProps } from "next/dist/next-server/lib/router/router";
import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styling/theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import Head from "next/head";
import { CssBaseline } from "@material-ui/core";
import React from "react";

import "fontsource-roboto";
// import "./"

export const cache = createCache({ key: "css", prepend: true });

export default function App({ Component, pageProps }: AppProps) {

	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
	}, []);

	return (
		<CacheProvider value={cache}>
			<Head>
				<title>Take Ludwig to Space!</title>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
				<meta name="title" content="🚀 Take Ludwig to the moon!"/ >
				<meta name="description" content="🚀 Take Ludwig to space and beyond! " />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://takeludwigto.space/"/>
				<meta property="og:title" content="🚀 Take Ludwig to the moon!"/>
				<meta property="og:description" content="🚀 Take Ludwig to space and beyond! "/>
				<meta property="og:image" content="" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image"/>
				<meta property="twitter:url" content="https://takeludwigto.space/"/>
				<meta property="twitter:title" content="🚀 Take Ludwig to the moon!"/>
				<meta property="twitter:description" content="🚀 Take Ludwig to space and beyond! "/>
				<meta property="twitter:image" content="" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{
					<Component {...pageProps} />
				}
			</ThemeProvider>
		</CacheProvider>
	);
}