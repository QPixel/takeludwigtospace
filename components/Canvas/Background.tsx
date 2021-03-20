import React, { ReactElement, useEffect, useRef } from "react";
import { ModeTypes } from "../../pages";
import { makeStyles } from "@material-ui/core";
import { genRandomNumber } from "../../src/Util";
import EmojiList, { IEmoji } from "./EmojiList";
import AnimatedEmojiV2 from "./AnimatedEmojiV2";
import { ClassNames } from "@emotion/react";
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
		backgroundImage:
			"linear-gradient(to right top, #051937, #14203c, #1f2740, #292e45, #33364a)",
		height: "100%",
		zIndex: -3,
		position: "absolute",
		width: "100%",
	},
}));

const numEmoji = 20;
const emojis: Array<AnimatedEmojiV2> = [];

const setupEmojis = (
	width: number,
	height: number,
	ctx: CanvasRenderingContext2D | null,
	list: ReadonlyArray<IEmoji>
) => {
	for (let i = 0; i < numEmoji; i += 1) {
		emojis.push(
			new AnimatedEmojiV2({
				width,
				height,
				ctx,
				emoji: list[genRandomNumber(0, EmojiList.length)],
			})
		);
	}
};
const EmojiComponent: React.FC<BackgroundProps> = ({
	mode,
}: BackgroundProps): ReactElement => {
	const emojiCanvasRef = useRef<HTMLCanvasElement>(null);
	const classes = useStyles();
	const emojilist: ReadonlyArray<IEmoji> =
		mode == ModeTypes.Normal ? EmojiList : EmojiList;
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
				if (emoji.y > 2000) {
					setTimeout(() => {
						emojis.splice(index, 1);
					}, 30);
					emojis.push(
						new AnimatedEmojiV2({
							width: current.width,
							height: current.height,
							emoji:
								EmojiList[genRandomNumber(0, EmojiList.length)],
							ctx,
						})
					);
				}
			});
		};

		setupEmojis(current.width, current.height, ctx, emojilist);
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
			<EmojiComponent mode={mode} />
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
