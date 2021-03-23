import { IEmoji } from "./EmojiList";

interface IRegularEmoji {
	ctx: CanvasRenderingContext2D | null;
	width: number;
	height: number;
	emoji: IEmoji;
}

export default class RegularEmoji {
	private ctx: CanvasRenderingContext2D | null;
	private image = new Image();
	private speed: number;
	private width = 112;
	private height = 112;
	
	x: number;
	y: number;
	constructor(data: IRegularEmoji) {
		this.ctx = data.ctx;
		this.image.src = data.emoji.path;
		this.height = 40 + Math.floor(Math.random() * 7);
		this.width = 40 + Math.floor(Math.random() * 7);
		
		this.speed = Math.random() * 3.5;
		this.x = Math.random() * 2000;
		this.y = 112 + Math.random() * -3000;
	}

	update(): void {
		this.ctx?.drawImage(
			this.image,
			this.x,
			this.y,
			this.width,
			this.height,
		);
		this.y += this.speed;
	}
}