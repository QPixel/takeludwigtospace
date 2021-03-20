import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Background from "../components/Canvas/Background";
import RocketShip from "../components/RocketShip";
import { genRandomNumber } from "../src/Util";
// import Typography from ""

export enum ModeTypes {
	Normal,
	NoEmotes,
	NoGifs,
	NyanLud,
	LoPunny,
	NitroLud,
	OmegaLu
}
export const titlePlanets: string[] = [
	"Space",
	"the Moon",
	"the Sun",
	"Mars",
	"Andromeda",
];
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
	},
}));
const IndexPage: React.FC = () => {
	const classes = style();
	const [mode, setMode] = useState<ModeTypes>(ModeTypes.NoGifs);
	return (
		<Layout title={`🚀 Take ludwig to ${titlePlanets[genRandomNumber(0, titlePlanets.length)]}!`} className={classes.root}>
			{/* <Typography variant="h1">Test</Typography> */}
			<RocketShip mode={mode} />
			<Background mode={mode}></Background>
		</Layout>
	);
};

export default IndexPage;
