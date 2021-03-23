import { Fade, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Background from "../components/Canvas/Background";
import RocketShip from "../components/RocketShip";
import { genRandomNumber } from "../src/Util";
import Loading from "../components/Loading";
import InformationCard from "../components/Information";
import Audio from "../components/Audio";
import { GetServerSideProps } from "next";
// import Typography from ""

export enum ModeTypes {
	Normal,
	NoEmotes,
	NoGifs,
	NyanLud,
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
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		width: "100%",
		height: "100%",
		margin: 0,
	},
	title: {
		color: "white",
		gridArea: "center",
		marginTop: "50%"
		// alignSelf: "center",
	}
}));
  
const IndexPage: React.FC = () => {
	const classes = style();
	const [isLoading, setLoading] = useState<boolean>(true);
	const [mode, setMode] = useState<ModeTypes>(ModeTypes.NoGifs);
	setTimeout(() => {
		setLoading(false);
	}, 3000);
	return (
		<>
			{
				isLoading && (<Loading />)
			}
			<Layout title={`🚀 Take Ludwig to ${titlePlanets[genRandomNumber(0, titlePlanets.length -1)]}!`} className={classes.root}>
				<RocketShip mode={mode} />
				<InformationCard />
				<Background mode={mode}></Background>
			</Layout>

		</>
	);
};

export default IndexPage;
