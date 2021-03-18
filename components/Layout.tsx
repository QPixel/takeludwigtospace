import React, { ReactNode } from "react";
import Head from "next/head";

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
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
		<div className={className}>{children}</div>
	</div>
);

export default Layout;
