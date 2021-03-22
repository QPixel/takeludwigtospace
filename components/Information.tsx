import { Button, Card, CardActions, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import Audio, { ISong, AudioState } from "./Audio";
import songList from "./SongList";
import {StopWatch} from "./Timer";
const useStyles = makeStyles((theme) => ({
	root: {
	},
	card: {
		marginTop: "auto",
		backgroundColor: "white",
		zIndex: 2,
		[theme.breakpoints.up("lg")]: {
			position: "fixed",
			right: "8rem",
			bottom: "8rem",
			maxWidth: "650px"
		},
		[theme.breakpoints.down("md")]: {
			position: "fixed",
			bottom: "1px",
			height: "28%"
		}
	},
	title: {
		fontSize: 23,
		color: "black",
		fontWeight: "bold",
	},
	subTitle: {
		fontSize: 19,
		color: "black"
	}
}));


const InformationCard: React.FC = (): ReactElement => {
	const classes = useStyles();
	const [seconds, setSeconds] = useState<string>("0");
	const [audioState, setAudioState] = useState<AudioState>({
		currentlyPlaying: 0,
		upNext: 1
	});

	// let seconds = "0";
	const initalTime = (new Date()).getTime();
	const updateSW = () => {
		const difference = (((new Date()).getTime() - initalTime) / 1000).toString();
		setSeconds(parseFloat(difference).toFixed(2));
	};
	useEffect(() => {
		setInterval(updateSW, 10);
	},[]);
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
			<Card className={classes.card}  md={3}>
				<CardContent>
					<Typography variant="h1" className={classes.title} color="textSecondary" gutterBottom>
								You've been taking Ludwig to space for {seconds} seconds.
					</Typography>
					<Typography variant="body2" component="p" className={classes.subTitle} gutterBottom>
						<span style={{fontWeight: "bold"}}> Currently Playing: </span>{songList[audioState.currentlyPlaying].title} by {songList[audioState.currentlyPlaying].artist}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="medium" color="primary" onClick={changeSong}>Skip Song</Button>
					<Button size="medium" color="primary">Share</Button>
					<Button size="medium" color="primary">Credits</Button>
				</CardActions>
			</Card>
			<Audio onEnded={changeSong} audioState={audioState} songList={songList} />
		</>
	);
	// return <Card className={classes.root}></Card>;
};

export default InformationCard;
