import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";


const calculateTimeInSeconds = (timeInSeconds: number): (number | string)[] => {
	const hours:number = Math.floor(timeInSeconds / 3600);
	const minutes:number = Math.floor((timeInSeconds - (hours * 3600)) / 60);
	const seconds:number = timeInSeconds - (hours * 3600) - (minutes * 60);
    
	return [
		hours < 10 ? `0${hours}` : hours,
		minutes < 10 ? `0${minutes}` : minutes,
		seconds < 10 ? `0${seconds}` : seconds
	];
	// function calculateTimeInSeconds(timeInSeconds: number): (number | string)[] {
};

const useSWStyles = makeStyles(() => ({
	root: {
		display: "inline-flex",
		justifyContent: "center",
		alignItems: "center",
	},
	timerdisplay: {
		display: "flex",
		margin: 0,
		fontSize: 29,
		letterSpacing: "2px"
	},
	timerdisplayspan: {
		display: "flex",
		position: "relative",
		fontSize: 29,
		letterSpacing: "2px"
	}
}));

export const StopWatch: React.FC = () => {
	const classes = useSWStyles();
	const [timeInSeconds, setTimeInSeconds] = useState(0);
	const [timeArray, setTimeArray] = useState<Array<number|string>>([]);

	const timer = setInterval(() => {
		setTimeInSeconds((previousState:number) => previousState + 1);
	}, 1000);
	useEffect(() => {
		setTimeArray(calculateTimeInSeconds(timeInSeconds));
	}, [timeInSeconds]);

	return (
		<>
			<span className={classes.root}>
				<p className={classes.timerdisplay}>{timeArray[0]}</p>
				<span className={classes.timerdisplayspan}>:</span>
				<p className={classes.timerdisplay}>{timeArray[1]}</p>
				<span className={classes.timerdisplayspan}>:</span>
				<p className={classes.timerdisplay}>{timeArray[2]}</p>
			</span>
		</>
	);
}; 



const Timer: React.FC = () => {
	return <div></div>;
};

export default Timer;
