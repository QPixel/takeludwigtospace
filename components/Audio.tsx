import React, { ReactElement, useRef } from "react";
import { genRandomNumber } from "../src/Util";


const songList: string[] = [
	"/audio/sunshine.mp3",
	"/audio/mogul.mp3"
];

const Audio: React.FC = (): ReactElement => {	
	const audioRef = useRef<HTMLAudioElement>(null);
	const audioSrc = songList[genRandomNumber(0, songList.length)];
	return (
		<audio ref={audioRef} src={audioSrc} autoPlay/>
	);
};

export default Audio;
