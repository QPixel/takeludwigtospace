import { IEmoji } from "./EmojiList";

interface IAnimatedEmoji {
	width: number;
	height: number;
	emoji: IEmoji;
	ctx: CanvasRenderingContext2D | null;
}

export default class AnimatedEmojiV2 {
	private ctx: IAnimatedEmoji["ctx"];
	private spritesheet = new Image();
	private frameIndex = 0;
	private lastUpdate = Date.now();
	private numberOfFrames = 1;
	private timePerFrame: number;
	private speed: number;
	private width = 112;
	private height = 112;
	// private id: string;
	x: number;
	y: number;

	constructor({ width, height, emoji, ctx }: IAnimatedEmoji) {
		this.ctx = ctx;
		// Position Emoji at a random spot on the canvas
		this.x = Math.random() * width;
		this.y = height + Math.random() * -3000;
		// this.id = v4();
		// Random speed times 4 (can be change)
		this.speed = Math.random() * 2.5;
		this.spritesheet.src = emoji.path;

		// Set width and height
		this.width = emoji.width;
		this.height = emoji.height;

		// Sprite specific details
		this.timePerFrame = emoji.timePerFrame;
		this.numberOfFrames = emoji.numberOfFrames || 1;
	}

	draw(): void {
		this.ctx?.drawImage(
			this.spritesheet,
			(this.frameIndex * this.width) / this.numberOfFrames,
			0,
			this.width / this.numberOfFrames,
			this.height,
			this.x,
			this.y,
			this.width / this.numberOfFrames,
			this.height
		);
	}

	update(): void {
		if (Date.now() - this.lastUpdate >= this.timePerFrame) {
			this.frameIndex++;
			if (this.frameIndex >= this.numberOfFrames) {
				this.frameIndex = 0;
			}
			this.lastUpdate = Date.now();
			this.draw();
			this.y += this.speed;
		}
	}
	// drawImage(ctx: CanvasRenderingContext2D) {}
}
