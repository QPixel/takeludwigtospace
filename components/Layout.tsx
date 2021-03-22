import React, { ReactNode } from "react";
import Head from "next/head";
import { Grid } from "@material-ui/core";

type Props = {
	children?: ReactNode;
	title?: string;
	className?: string;
};

const Layout: React.FC<Props> = ({
	children,
	title = "Take Ludwig to the moon",
	className,
}: Props) => (
	<>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
		<Grid container direction="row" className={className}>{children}</Grid>
	</>
);

export default Layout;
