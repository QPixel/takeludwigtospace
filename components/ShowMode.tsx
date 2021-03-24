
import React from "react";
import { ModeTypes } from "../pages";
import NormalDisplay from "./Modes/Main/Display";

interface ShowModeProps {
	mode: ModeTypes
}

const ShowMode: React.FC<ShowModeProps> = ({mode}: ShowModeProps) => {
	switch (mode) {
	case ModeTypes.Normal: {
		return (
			<NormalDisplay mode={mode} />
		);
	}
	case ModeTypes.NoGifs: {
		return (
			<NormalDisplay mode={mode} />
		);
	}
	default: {
		return (
			<NormalDisplay mode={ModeTypes.NoGifs}/>
		);
	}
	}
};

export default ShowMode;