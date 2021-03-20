import { makeStyles } from "@material-ui/core";
import React, { ReactElement, useEffect, useRef } from "react";

// export interface StarsProps {
// }

const useStyles = makeStyles(() => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: -1,
		position: "absolute"
	}
}));


// Star code taken from ludwig's timer, made by ottomated
const Stars: React.FC = (): ReactElement => {
	const classes = useStyles();
	const ref = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas?.getContext("2d");
		if (!ctx || !canvas) return;
		const stars: number[][] = [];
		for (let i =0; i < 50; i++) {
			stars.push([Math.random() * 232, Math.random() * 134, Math.random() * 3 + 2]);
		}
		const render = () => {

			ctx.clearRect(0, 0, canvas?.width, canvas?.height);
			ctx.fillStyle = "white";
			for (const star of stars) {
				ctx.beginPath();
				ctx.arc(star[0], star[1], star[2], 0, Math.PI *2);
				ctx.fill();
				star[0] -= star[3];
				if (star[0] < 0) star[0] = canvas.width;
			}

			raf = requestAnimationFrame(render);
		};
		let raf = requestAnimationFrame(render);
		return () => cancelAnimationFrame(raf);
	}, []);
	return (
		<canvas ref={ref} className={classes.root} />
	);
};

export default Stars;
