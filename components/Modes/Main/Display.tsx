import React from "react";
import { ModeTypes } from "../../../pages";
import RocketShip from "./RocketShip";
import Background from "./Canvas/Background";

interface DisplayProps {
	mode: ModeTypes;
}


const NormalDisplay: React.FC<DisplayProps> = ({mode}: DisplayProps) => {
	return (
		<>
			<RocketShip />
			<Background mode={mode}/>
		</>
	);
};

export default NormalDisplay;