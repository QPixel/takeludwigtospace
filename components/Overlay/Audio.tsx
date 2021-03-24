import { CssBaselineProps } from "@material-ui/core";
import React, { ReactElement, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { genRandomNumber } from "../../src/Util";

export interface ISong {
	src: string;
	title: string;
	artist?: string;
	variant?: string;
}

export interface AudioState {
	currentlyPlaying: number;
	upNext: number;
}

interface AudioProps {
	onEnded: () => void;
	audioState: AudioState;
	songList: ISong[];
	playing: boolean;
}

const Audio: React.FC<AudioProps> = ({onEnded, audioState, songList, playing}: AudioProps): ReactElement => {	
	const style: React.CSSProperties = {
		width: 0,
		height: 0
	};

	return (
		<ReactPlayer onEnded={onEnded} width="0" height="0" url={songList[audioState.currentlyPlaying].src} playing={playing} volume={0.6} config={{
			file: {
				forceAudio: true
			}
		}}/>
	);
};

export default Audio;
