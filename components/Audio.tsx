import React, { ReactElement, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { genRandomNumber } from "../src/Util";

export interface ISong {
	src: string;
	title: string;
	artist?: string;
}

export interface AudioState {
	currentlyPlaying: number;
	upNext: number;
}

interface AudioProps {
	onEnded: () => void;
	audioState: AudioState;
	songList: ISong[]
}

const Audio: React.FC<AudioProps> = ({onEnded, audioState, songList}: AudioProps): ReactElement => {	

	return (
		<ReactPlayer onEnded={onEnded} url={songList[audioState.currentlyPlaying].src} playing config={{
			file: {
				forceAudio: true
			}
		}}/>
	);
};

export default Audio;
