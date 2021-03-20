export interface IEmoji {
	path: string;
	timePerFrame: number;
	numberOfFrames: number;
	width: number;
	height: number;
}

const EmojiList: ReadonlyArray<IEmoji> = [
	// {
	// 	path: "/emoji/pepeD.png",
	// 	timePerFrame: 15,
	// 	numberOfFrames: 6,
	// 	width: 672,
	// 	height: 112,
	// },
	{
		path: "/emoji/ludwigjam.png",
		timePerFrame: 15,
		numberOfFrames: 8,
		width: 896,
		height: 116,
	},
	// {
	// 	path: "/emoji/jammies.png",
	// 	timePerFrame: 16,
	// 	numberOfFrames: 7,
	// 	width: 784,
	// 	height: 112,
	// },
	// {
	// 	path: "/emoji/pepeJam.png",
	// 	timePerFrame: 15,
	// 	numberOfFrames: 4,
	// 	width: 448,
	// 	height: 108,
	// },
	// {
	// 	path: "/emoji/catJam.png",
	// 	timePerFrame: 15,
	// 	numberOfFrames: 7,
	// 	width: 784,
	// 	height: 112,
	// },
	// {
	// 	path: "/emoji/blobDance.png",
	// 	timePerFrame: 14,
	// 	numberOfFrames: 80,
	// 	width: 8960,
	// 	height: 112,
	// },
];

export default EmojiList;