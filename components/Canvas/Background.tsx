import { useEffect, useRef, useState } from "react";

interface BackgroundProps {
	mode: number
}

const Background = ({mode}: BackgroundProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		const current = canvasRef.current;
		if (!current) return;
		const ctx = current.getContext("2d");
		//  = window.innerWidth;

	}, []);
	console.log(mode);
	return (
		<canvas ref={canvasRef} />
	);
};

export default Background;