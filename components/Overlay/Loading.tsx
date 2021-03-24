import { makeStyles } from "@material-ui/core";
import React, { ReactElement } from "react";
import { genRandomNumber } from "../../src/Util";

const useStyles = makeStyles(() => ({
	root: {
		width: "100%",
		zIndex: 50,
		height: "100%",
		paddingBottom: 1200,
		color: "white",
		display: "grid",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		position: "absolute",
		top: 0,
		left:  0,
		background: "#000",
		backgroundImage: 
			"linear-gradient(to left top, #030409, #0a0c15, #0f131e, #121827, #131d30, #121e32, #121f33, #112035, #0f1d2f, #0e1a28, #0e1722, #0c141c)",
	},
	loadingContainer: {
		marginTop: "100%",
	}
}));
const loadingPhrases = [
	"Haha Lud short",
	"to the mooooon",
	"I am not your website",
	"I am not your friend",
	"Made with headaches",
	"Made with <3 by QPixel",
	"shitty code !== bad product",
	"Sniper got your tongue?",
	"Made in less than a week",
	"Longer load time = better website",
	"Fastest loading website",
	"hold the line",
	"BOI'S",
	"The Plan is Simple!",
	"ludwig7"
];

const Loading: React.FC = (): ReactElement => {
	const classes = useStyles();
	const phrase = loadingPhrases[genRandomNumber(0, loadingPhrases.length - 1)];

	return (
		<div className={classes.root}>
			<div className={classes.loadingContainer}>
				<h1 style={{marginBottom: "1px"}}>Loading...</h1>
				<h3>{phrase}</h3>
			</div>

		</div>
	);
};

export default Loading;