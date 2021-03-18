import { useEffect, useRef } from "react";
import React from "react";
import { ModeTypes } from "../../pages";
import { makeStyles } from "@material-ui/core";
import AnimatedEmoji from "./AnimatedEmoji";
import { genRandomNumber } from "../../src/Util";
interface BackgroundProps {
	mode: ModeTypes;
}

export interface IEmoji {
	path: string;
	timePerFrame: number;
	numberOfFrames: number;
}
const useStyles = makeStyles(() => ({
	root: {
		top: 0,
		left: 0,
		position: "absolute",
		zIndex: -50,
	},
	emojis: {
		zIndex: -2,
		position: "absolute",
	},
	background: {
		zIndex: -3,
		position: "absolute",
	},
}));

const numEmoji = 5;
const emojis: Array<AnimatedEmoji> = [];

const emojiInstances: IEmoji[] = [
	{
		path: "/emoji/pepeD.png",
		timePerFrame: 15,
		numberOfFrames: 6,
	},
];
const setupEmojis = (
	ctx: CanvasRenderingContext2D | null,
	canvas: HTMLCanvasElement
) => {
	for (let i = 0; i < numEmoji; i += 1) {
		emojis.push(
			new AnimatedEmoji({
				ctx,
				width: canvas.width,
				height: canvas.height,
				emoji: emojiInstances[0],
			})
		);
	}
};
const Background: React.FC<BackgroundProps> = ({ mode }: BackgroundProps) => {
	const classes = useStyles();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const emojiCanvasRef = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		const current = canvasRef.current;
		if (!current) return;
		current.width = window.innerWidth;
		current.height = window.innerHeight;
		const ctx = current.getContext("2d");
		//  = window.innerWidth;
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		ctx!.fillStyle = "#0df2c9";
		ctx?.fillRect(0, 0, current.width, current.height);

		window.addEventListener("resize", () => {
			current.width = window.innerWidth;
			current.height = window.innerHeight;
		});
	});
	useEffect(() => {
		const current = emojiCanvasRef.current;
		if (!current) return;
		current.width = window.innerWidth;
		current.height = window.innerHeight;
		const ctx = current.getContext("2d");

		const animate = () => {
			ctx?.clearRect(0, 0, current.width, current.height);
			requestAnimationFrame(animate);
			emojis.forEach((emoji, index) => {
				emoji.update();
				if (emoji.y < 0) {
					setTimeout(() => {
						emojis.splice(index, 1);
					}, 2);
					emojis.push(
						new AnimatedEmoji({
							ctx,
							width: current.width,
							height: current.height,
							emoji: emojiInstances[0],
						})
					);
				}
			});
		};

		setupEmojis(ctx, current);
		animate();

		window.addEventListener("resize", () => {
			current.width = window.innerWidth;
			current.height = window.innerHeight;
		});
	}, []);
	// console.log(mode);
	return (
		<div className={classes.root}>
			<canvas
				id="emojis"
				ref={emojiCanvasRef}
				className={classes.emojis}
			/>
			<canvas
				id="background"
				ref={canvasRef}
				className={classes.background}
			/>
		</div>
	);
};

export default Background;
