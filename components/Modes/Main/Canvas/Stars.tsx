import { makeStyles } from "@material-ui/core";
import React, { ReactElement, useEffect, useRef } from "react";

// export interface StarsProps {
// }

const useStyles = makeStyles(() => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: -3,
		position: "absolute",
	},
}));


interface StarWindow extends Window {
	starList: Star[];
}

// eslint-disable-next-line no-var
declare var window: StarWindow;
interface Star {
	x: number;
	y: number;
	z: number;
}

type Directions = "z" | "l" | "r" | "t" | "b";
const StarSize = 3,
	StarMinScale = 0.2,
	OverflowThreshold = 50;
const velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
let scale = 0.6,
	width: number,
	height: number;


const placeStar = (star: Star): void => {
	star.x = Math.random() * width;
	star.y = Math.random() * height;
};

const recyleStar = (star: Star) => {
	let direction: Directions = "z";
	const vx = Math.abs(velocity.x),
		vy = Math.abs(velocity.y);

	if (vx > 1 || vy > 1) {
		let axis;

		if (vx > vy) {
			axis = Math.random() < vx / (vx + vy) ? "h" : "v";
		} else {
			axis = Math.random() < vy / (vx + vy) ? "v" : "h";
		}

		if (axis === "h") {
			direction = velocity.x > 0 ? "l" : "r";
		} else {
			direction = velocity.y > 0 ? "t" : "b";
		}
	}
	star.z = StarMinScale + Math.random() * (1 - StarMinScale);

	switch (direction) {
	case "z":
		star.z = 0.1;
		star.x = Math.random() * width;
		star.y = Math.random() * height;
		break;
	case "l":
		star.x = -OverflowThreshold;
		star.y = height * Math.random();
		break;
	case "r":
		star.x = width + OverflowThreshold;
		star.y = height * Math.random();
		break;
	case "t":
		star.x = width * Math.random();
		star.y = -OverflowThreshold;
		break;
	case "b":
		star.x = width * Math.random();
		star.y = height + OverflowThreshold;
		break;
	default:
		break;
	}
};



// Star code adapted for react from https://codepen.io/hakimel/pen/bzrZGo
// If you want to pr this code to make it better, i'm totally open
const Stars: React.FC = (): ReactElement => {
	const classes = useStyles();
	const ref = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas?.getContext("2d");
		if (!ctx || !canvas) return;
		const stars: Star[] = [];
		const StarCount = (window.innerWidth + window.innerHeight / 8)* 1.2;
		console.log(StarCount);
		const resize = () => {
			scale = window.devicePixelRatio || 1;
			width = window.innerWidth * scale;
			height = window.innerHeight * scale;
			canvas.width = width;
			canvas.height = height;

			stars.forEach(placeStar);
		};

		const update = () => {
			velocity.tx *= 0.96;
			velocity.ty *= 0.96;

			velocity.x += (velocity.tx - velocity.x) * 0.8;
			velocity.y += (velocity.ty - velocity.y) * 0.8;

			stars.forEach(star => {
				star.x += velocity.x * star.z;
				star.y += velocity.y * star.z;

				star.x += (star.x - width / 2) * velocity.z * star.z;
				star.y += (star.y - height / 2) * velocity.z * star.z;

				// When out of bounds recycle the star
				if (
					star.x < -OverflowThreshold ||
					star.x > width + OverflowThreshold ||
					star.y < -OverflowThreshold ||
					star.y > height + OverflowThreshold
				) {
					recyleStar(star);
				}

			});
			if (stars.length < 700) {
				const newcount = StarCount - stars.length;
				for (let i = 0; i < newcount; i++) {
					stars.push({
						x: 0,
						y: 0,
						z: StarMinScale + Math.random() * (1 - StarMinScale),
					});	
				} 
			}
		};
		
		const render = () => {
			// console.log("rendered");
			stars.forEach(star => {
				ctx.beginPath();
				ctx.lineCap = "round";
				ctx.lineWidth = StarSize * star.z * scale;
				ctx.strokeStyle = "rgba(255, 255, 255,"+(0.5 + 0.5*Math.random())+")";


				ctx.beginPath();
				ctx.moveTo(star.x, star.y);
				
				let tailX = velocity.x * 0.8, tailY = velocity.y;


				// ctx.stroke won't work on an invisible line
				if (Math.abs(tailX) < 0.1) tailX = 0.3;
				if (Math.abs(tailY) < 0.1) tailY = 0.3;

				ctx.lineTo(star.x + tailX, star.y + tailY);
				ctx.stroke();
			});
		};
		const step = () => {
			ctx.clearRect(0, 0, width, height);

			update();
			render();

			requestAnimationFrame(step);
		};

		const generate = () => {
			for (let i = 0; i < StarCount; i++) {
				stars.push({
					x: 0,
					y: 0,
					z: StarMinScale + Math.random() * (1 - StarMinScale),
				});
			}
		};
		window.starList = stars;
		window.onresize = resize;
		generate();
		resize();
		step();
	}, []);
	return <canvas ref={ref} className={classes.root} />;
};

export default Stars;
