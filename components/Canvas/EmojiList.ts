export interface IEmoji {
	path: string;
	timePerFrame: number;
	numberOfFrames: number;
	width: number;
	height: number;
}

const GifEmojis: ReadonlyArray<IEmoji> = [
	{
		path: "/emoji/pepeD.png",
		timePerFrame: 15,
		numberOfFrames: 6,
		width: 672,
		height: 112,
	},
	{
		path: "/emoji/ludwigjam.png",
		timePerFrame: 15,
		numberOfFrames: 8,
		width: 896,
		height: 116,
	},
	{
		path: "/emoji/jammies.png",
		timePerFrame: 16,
		numberOfFrames: 7,
		width: 784,
		height: 112,
	},
	{
		path: "/emoji/pepeJam.png",
		timePerFrame: 15,
		numberOfFrames: 4,
		width: 448,
		height: 108,
	},
	{
		path: "/emoji/catJam.png",
		timePerFrame: 15,
		numberOfFrames: 7,
		width: 784,
		height: 112,
	},
	{
		path: "/emoji/blobDance.png",
		timePerFrame: 14,
		numberOfFrames: 80,
		width: 8960,
		height: 112,
	},
];

const RegularEmojis: ReadonlyArray<IEmoji> = [
	{
		path: "/emoji/ludwig3.png",
		timePerFrame: 0,
		numberOfFrames: 0,
		width: 112,
		height: 112
	},
	{
		path: "/emoji/ludwigFriend.png",
		timePerFrame: 0,
		numberOfFrames: 0,
		width: 112,
		height: 112
	},
	{
		path: "/emoji/ludwigSip.png",
		timePerFrame: 0,
		numberOfFrames: 0,
		width: 112,
		height: 112
	},
	{
		path: "/emoji/ludwigScam.png",
		timePerFrame: 0,
		numberOfFrames: 0,
		width: 112,
		height: 112
	},
	{
		path: "/emoji/ludwig7.png",
		timePerFrame: 0,
		numberOfFrames: 0,
		width: 112,
		height: 112
	}
];

export {RegularEmojis, GifEmojis};