// import React from "react";

import { IEmoji } from "./Background";

interface IAnimatedEmoji {
	ctx: CanvasRenderingContext2D | null;
	width: number;
	height: number;
	emoji: IEmoji;
}
// Scuffed but it works
export default class AnimatedEmoji {
private ctx: IAnimatedEmoji["ctx"];
private frameIndex = 0;
private lastUpdate = Date.now();
private numberOfFrames = 1;
private timePerFrame;
private speedY: number;
public spritesheet: HTMLImageElement;
public width = 672;
public height = 112;
public x: number;
public y: number;
constructor ({ctx, width, height, emoji}: IAnimatedEmoji) {
	this.ctx = ctx;
	this.x = Math.random() * width * 2.5;
	this.y = height + Math.random() * 200;
	this.speedY = Math.random() * 4;
	this.spritesheet = new Image();
	// console.log(emoji);
	this.spritesheet.src = emoji.path;
	// console.log(emoji);
	this.timePerFrame = emoji.timePerFrame;
	this.numberOfFrames = emoji.numberOfFrames || 1;
	this.width = emoji.width;
	this.height = emoji.height;
	// console.log(this.spritesheet);
}
draw(): void {
	// console
	this.ctx?.drawImage(
		this.spritesheet,
		this.frameIndex * this.width / this.numberOfFrames,
		0,
		this.width / this.numberOfFrames,
		this.height,
		this.x,
		this.y,
		this.width / this.numberOfFrames,
		this.height
	);
	// console.log("Drawn emoji");
}
update(): void {
	// console.log(this.frameIndex);
	if (Date.now() - this.lastUpdate >= this.timePerFrame) {
		this.frameIndex++;
		if (this.frameIndex >= this.numberOfFrames) {
			this.frameIndex = 0;
		}
		this.lastUpdate = Date.now();
		this.draw();
		this.y -= this.speedY;
	}
}		
fade(): void {

}
}


// class AnimatedEmoji {
// 	constructor
// }
// 	private ctx: IAnimatedEmoji["ctx"];
// 	private frameIndex = 0;
// 	private lastUpdate = Date.now();
// 	private numberOfFrames = 1;
// 	private timePerFrame;
// 	private speedY: number;
// 	public spritesheet: HTMLImageElement;
// 	public width = 672;
// 	public height = 112;
// 	public x: number;
// 	public y: number;
// 	constructor({ ctx, width, height, emoji }: IAnimatedEmoji) {
// 		this.ctx = ctx;
// 		this.x = Math.random() * width;
// 		this.y = height + Math.random() * 200;
// 		this.speedY = Math.random() * 2;
// 		this.spritesheet = new Image();
// 		this.spritesheet.src = "/emoji/pepeD.png";
// 		// console.log(emoji);
// 		this.timePerFrame = emoji.timePerFrame;
// 		this.numberOfFrames = emoji.numberOfFrames || 1;
// 		// console.log(this.spritesheet);
// 	}
// 	draw(): void {
// 		// console
// 		this.ctx?.drawImage(
// 			this.spritesheet,
// 			(this.frameIndex * this.width) / this.numberOfFrames,
// 			0,
// 			this.width / this.numberOfFrames,
// 			this.height,
// 			this.x,
// 			this.y,
// 			this.width / this.numberOfFrames,
// 			this.height
// 		);
// 		// console.log("Drawn emoji");
// 	}
// 	update(): void {
// 		// console.log(this.frameIndex);
// 		if (Date.now() - this.lastUpdate >= this.timePerFrame) {
// 			this.frameIndex++;
// 			if (this.frameIndex >= this.numberOfFrames) {
// 				this.frameIndex = 0;
// 			}
// 			this.lastUpdate = Date.now();
// 			this.draw();
// 			this.y -= this.speedY;
// 		}
// 	}
// }

// class AnimatedEmoji {
// 	constructor
// }

// const AnimatedEmojiLayer: React.FC = (): ReactElement => {
// 	const canvasRef = useRef<HTMLCanvasElement>(null);

// 	useEffect(() => {
// 		const canvas = canvasRef.current;
// 		if (!canvas) return;
// 		canvas.width = window.innerWidth;
// 		canvas.height = window.innerHeight;
// 		const ctx = canvas.getContext("2d");

// 		const numEmoji = 50;
// 		const emojis = [];

// 		const setupEmoji = () => {
// 		};
// 	}, []);
// 	return <canvas ref={canvasRef}></canvas>;
// };

// export default AnimatedEmojiLayer;
