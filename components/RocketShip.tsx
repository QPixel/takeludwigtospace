import { Box, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { ModeTypes } from "../pages";
import imamge from "next/image";
export interface RocketShipProps {
	mode: ModeTypes;
}

const useStyles = makeStyles((theme) => ({
	root: {
		alignSelf: "start",
		height: "680px",
		[theme.breakpoints.up("lg")]: {
			marginLeft: "200px",
			marginTop: "120px",
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: "50px",
			marginTop: "20px",
		},
		zIndex: 3
	},
	rocketship: {

	},
	face: {
		position: "absolute",
		top: "75px",
		left: "90px",
	},
	
}));

const RocketShip: React.FC<RocketShipProps> = ({
	mode,
}: RocketShipProps): ReactElement => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<div id="rocket">
				<motion.div
					animate={{
						x: [0, 0.5, 2, 1, 0.4, 4, 0, 8, 2.5, 3],
						rotateZ: [0.5, 4, 1.5, 6, 2, 0.7],
						y: 20,
					}}
					transition={{
						repeatType: "mirror",
						repeatDelay: 0,
						repeat: Infinity,
						type: "tween",
						ease: "easeInOut",
						duration: 0.1,
					}}
					className={classes.rocketship}
				>
					{/* <div className={classes.rocketship}> */}
					<div className={classes.face}>
						<img width={112} height={112} src="/face.png"></img>
					</div>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="600.04"
						width="282.8"
					>
						<path
							d="M53.666 283.747S3.635 319.199 0 406.45c28.175-20.904 57.188-23.915 77.226-25.59l10.026-71.658-33.586-25.456M229.136 283.747s50.03 35.452 53.664 122.704c-28.173-20.904-57.187-23.915-77.224-25.59l-10.027-71.658 33.587-25.456"
							fill="#eb3044"
						/>
						<path
							d="M108.848 417.77s-26.982 45.94 36.639 182.27c53.625-136.33 28.054-181.696 28.054-181.696s-33.166-11.07-64.693-.575"
							fill="#fac10e"
						/>
						<path
							d="M141.397 493.703c-29.538-39.991-16.85-73.264-16.85-73.264 6.22-3.418 12.122-4.588 17.296-4.588 11.285 0 19.094 5.574 19.094 5.574s9.09 34.106-19.54 72.278"
							fill="#fbe26f"
						/>
						<path
							d="M235.34 206.933c0 80.42-16.723 140.918-28.941 174.502-7.27 19.782-12.936 30.25-12.936 30.25s-18.76 9.74-52.063 9.74c-33.302 0-52.06-9.74-52.06-9.74s-5.816-10.76-13.088-30.824c-12.361-33.744-28.793-94.09-28.793-173.928 0-66.014 21.956-119.389 44.792-155.453 18.9-29.808 38.242-47.844 46.678-51.479h4.942c8.434 3.635 27.777 21.671 46.68 51.479 22.834 36.064 44.789 89.439 44.789 155.453"
							fill="#d7d6d1"
						/>
						<path
							d="M141.983 392.05c-34.027 0-56.713-7.554-65.73-11.189 7.271 20.064 13.086 30.824 13.086 30.824s18.76 9.74 52.061 9.74c33.303 0 52.063-9.74 52.063-9.74s5.666-10.468 12.936-30.25c-9.742 3.786-31.847 10.616-64.416 10.616"
							fill="#53a3af"
						/>
						<path
							d="M188.987 140.152c0 26.279-21.307 47.588-47.587 47.588-26.28 0-47.588-21.31-47.588-47.588 0-26.28 21.309-47.588 47.588-47.588 26.28 0 47.587 21.308 47.587 47.588"
							fill="#eb3044"
						/>
						<path
							d="M176.264 140.152c0 19.257-15.608 34.863-34.864 34.863-19.257 0-34.863-15.606-34.863-34.863 0-19.256 15.606-34.864 34.863-34.864 19.256 0 34.864 15.608 34.864 34.864"
							fill="#53a3af"
						/>
						<path
							d="M190.55 51.48c-14.393 5.532-31.263 8.727-49.15 8.727-17.886 0-34.757-3.195-49.15-8.727C111.153 21.672 130.494 3.636 138.93.001h4.94c8.435 3.635 27.778 21.671 46.68 51.479M151.701 329.879c0 41.538-4.614 104.293-10.302 104.293-5.687 0-10.302-62.755-10.302-104.293 0-41.546 4.615-46.132 10.302-46.132 5.688 0 10.302 4.586 10.302 46.132"
							fill="#eb3044"
						/>
					</svg>
					{/* </div> */}
				</motion.div>
			</div>
		</Box>
	);
};

export default RocketShip;
