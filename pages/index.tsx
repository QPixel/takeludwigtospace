import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Typography } from "@material-ui/core";
import Background from "../components/Canvas/Background";
// import Typography from ""

export enum ModeTypes {
	Normal,
}

const style = makeStyles(() => ({
	root: {
		display: "block",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		width: "100%",
		height: "100%",
		margin: 0,
		padding: 0,
	},
}));
const IndexPage: React.FC = () => {
	const classes = style();
	const [mode, setMode] = useState<ModeTypes>(ModeTypes.Normal);
	return (
		<Layout title="Take Ludwig to the moon!" className={classes.root}>
			{/* <Typography variant="h1">Test</Typography> */}
			<Background mode={mode}></Background>
		</Layout>
	);
};

export default IndexPage;
