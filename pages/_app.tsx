import { AppProps } from "next/dist/next-server/lib/router/router";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styling/theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import Head from "next/head";
import { CssBaseline } from "@material-ui/core";
import React from "react";
import { genRandomNumber } from "../src/Util";
import Loading from "../components/Loading";
// import "./"

export const cache = createCache({ key: "css", prepend: true });
const titlePlanets: string[] = [
	"Space",
	"the Moon",
];
export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [pageLoading, setPageLoading] = useState<boolean>(false);
	useEffect(() => {
		const handleStart = () => {setPageLoading(true);};
		const handleComplete = () => {setPageLoading(true);};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routerChangeComplete", handleComplete);
	}, [router]);
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
	}, []);

	return (
		<CacheProvider value={cache}>
			<Head>
				<title>Take Ludwig to {titlePlanets[genRandomNumber(0, titlePlanets.length)]}!</title>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{
					pageLoading ? <Loading /> : 
						<Component {...pageProps} />
				}
			</ThemeProvider>
		</CacheProvider>
	);
}