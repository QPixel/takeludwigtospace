import { Button, Card, CardActions, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import Audio, { ISong, AudioState } from "./Audio";
import {StopWatch} from "./Timer";
const useStyles = makeStyles((theme) => ({
	root: {

	},
	card: {
		width: "100%",
		marginTop: "auto",
		backgroundColor: "white",
	},
	box: {
		flexGrow: 1,
		marginTop: 500,
		marginLeft: 540,
		color: "white"
	},
	title: {
		fontSize: 30,
		color: "black",
		fontWeight: "bold",
	},
	subTitle: {
		fontSize: 20,
		color: "black"
	}
}));

const songList: ISong[] = [
	{
		src: "/audio/mogul.mp3",
		title: "MOGUL",
		artist: "Saint Marshall (Inspired by Ludwig Ahgren & Jonathan Figoli)"
	},
	{
		src: "/audio/sunshine.mp3",
		title: "Can you feel the sunshine?",
		artist: "Sonic R"
	}
];



const InformationCard: React.FC = (): ReactElement => {
	const classes = useStyles();
	const [audioState, setAudioState] = useState<AudioState>({
		currentlyPlaying: 0,
		upNext: 1
	});
	const getNextSong = () => {
		const upnext = audioState.upNext;
		if (upnext + 1 > songList.length - 1 || upnext > songList.length - 1) {
			return 0;
		}
		return upnext + 1;
	};
	const changeSong = () => {
		const next = getNextSong();
		console.log(next);
		setAudioState({
			currentlyPlaying: audioState.upNext,
			upNext: next
		});
	};
	return (
		<>
			<Grid container direction="column" className={classes.box} item lg={6}>
				<Grid item
					container
					direction="column"
					alignItems="flex-end"
					justify="flex-end">
					<Card className={classes.card}>
						<CardContent>
							<Typography variant="h1" className={classes.title} color="textSecondary" gutterBottom>
								You've been taking Ludwig to space for {<StopWatch />}
							</Typography>
							<Typography variant="body2" component="p" className={classes.subTitle} gutterBottom>
								<span style={{fontWeight: "bold"}}> Currently Playing: </span>{songList[audioState.currentlyPlaying].title} by {songList[audioState.currentlyPlaying].artist}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small" onClick={changeSong}>Skip Song</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid> 
			<Audio onEnded={changeSong} audioState={audioState} songList={songList} />
		</>
	);
	// return <Card className={classes.root}></Card>;
};

export default InformationCard;
