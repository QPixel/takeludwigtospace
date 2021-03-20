import React, { ReactElement, useEffect, useRef } from "react";
import { ModeTypes } from "../../pages";
import { makeStyles } from "@material-ui/core";
import { genRandomNumber } from "../../src/Util";
import { IEmoji, GifEmojis, RegularEmojis } from "./EmojiList";
import AniamtedEmoji from "./AnimatedEmojiV2";
import { ClassNames } from "@emotion/react";
import RegularEmoji from "./RegularEmoji";
import Stars from "./Stars";
interface BackgroundProps {
	mode: ModeTypes;
}

const useStyles = makeStyles(() => ({
	root: {
		top: 0,
		left: 0,
		position: "absolute",
		zIndex: -50,
		width: "100%",
		height: "100%",
	},
	emojis: {
		zIndex: -2,
		position: "absolute",
	},
	background: {
		background:
		// "#000000",
		"linear-gradient(to left top, #030409, #0a0c15, #0f131e, #121827, #131d30, #121e32, #121f33, #112035, #0f1d2f, #0e1a28, #0e1722, #0c141c)",
		height: "100%",
		zIndex: -3,
		position: "absolute",
		width: "100%",
	},
}));

const numEmoji = 200;
const emojis: Array<AniamtedEmoji | RegularEmoji> = [];

const setupEmojis = (
	width: number,
	height: number,
	ctx: CanvasRenderingContext2D | null,
	list: ReadonlyArray<IEmoji>,
	mode: ModeTypes
) => {
	if (mode === ModeTypes.NoGifs) {
		for (let i = 0; i < numEmoji; i += 1) {
			emojis.push(
				new RegularEmoji({
					width,
					height,
					ctx,
					emoji: list[genRandomNumber(0, RegularEmojis.length)],
				})
			);
		}
	} else {
		for (let i = 0; i < numEmoji; i += 1) {
			emojis.push(
				new AniamtedEmoji({
					width,
					height,
					ctx,
					emoji: list[genRandomNumber(0, GifEmojis.length)],
				})
			);
		}
	}
};
const EmojiComponent: React.FC<BackgroundProps> = ({
	mode,
}: BackgroundProps): ReactElement => {
	const emojiCanvasRef = useRef<HTMLCanvasElement>(null);
	const classes = useStyles();
	const emojilist: ReadonlyArray<IEmoji> =
		mode == ModeTypes.Normal ? GifEmojis : RegularEmojis;
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
				// console.log(emoji.id);
				if (emoji.y > 1500) {
					setTimeout(() => {
						emojis.splice(index, 1);
					}, 30);
					emojis.push(
						mode === ModeTypes.Normal
							? new AniamtedEmoji({
								width: current.width,
								height: current.height,
								emoji:
										GifEmojis[
											genRandomNumber(0, GifEmojis.length)
										],
								ctx,
							})
							: new RegularEmoji({
								width: current.width,
								height: current.height,
								emoji:
										RegularEmojis[
											genRandomNumber(
												0,
												RegularEmojis.length
											)
										],
								ctx,
							})
					);
				}
			});
		};

		setupEmojis(current.width, current.height, ctx, emojilist, mode);
		animate();

		window.addEventListener("resize", () => {
			current.width = window.innerWidth;
			current.height = window.innerHeight;
		});
	});
	return <canvas ref={emojiCanvasRef} className={classes.emojis} />;
};

const Background: React.FC<BackgroundProps> = ({
	mode,
}: BackgroundProps): ReactElement => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Stars />
			{mode === ModeTypes.NoEmotes ? (
				<></>
			) : (
				<EmojiComponent mode={mode} />
			)}
			<div id="background" className={classes.background}></div>
		</div>
	);
};

export default Background;

// const Background: React.FC<BackgroundProps> = () => {
// 	const classes = useStyles();
// 	const canvasRef = useRef<HTMLCanvasElement>(null);
// 	// const emojiCanvasRef = useRef<HTMLCanvasElement>(null);
// 	useEffect(() => {
// 		const current = canvasRef.current;
// 		if (!current) return;
// 		current.width = window.innerWidth;
// 		current.height = window.innerHeight;
// 		const ctx = current.getContext("2d");
// 		//  = window.innerWidth;
// 		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
// 		ctx!.fillStyle = "#0df2c9";
// 		ctx?.fillRect(0, 0, 100, 100);

// 		window.addEventListener("resize", () => {
// 			current.width = window.innerWidth;
// 			current.height = window.innerHeight;
// 		});
// 	});
// 	return (
// 		<div className={classes.root}>
// 			{/* <canvas
// 				id="emojis"
// 				ref={emojiCanvasRef}
// 				className={classes.emojis}
// 			/> */}
// 			<canvas
// 				id="background"
// 				ref={canvasRef}
// 				className={classes.background}
// 			/>
// 		</div>
// 	);
// };
