import { Card, CardActionArea, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Grow, IconButton, List, makeStyles, Typography } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { GitHub, Reddit, Twitter } from "@material-ui/icons";
import React from "react";
import CreditsList from "./CreditsList";


interface CreditsProps {
	open: boolean;
	onClose: () => void;
}
export interface CreditData {
	name: string;
	image?: string;
	action: string;
	website?: string;
	socials: {
		github?: string;
		twitter?: string;
		reddit?: string;
	}
}

interface CreditsCardProps {
	data: CreditData
}

const useStyles = makeStyles(() => ({
	dialog: {
		
	},
	cardcontainer: {
		flexGrow: 1,
		height: "200px"
	},
	card: {
		width: "250px"
	},
	media: {
		height: 140
	}
}));


const CreditsCard: React.FC<CreditsCardProps> = ({data}: CreditsCardProps) => {
	const classes = useStyles();
	const {name, image, action, website, socials} = data;
	const handleSocialClick = (socialLink: string | undefined) => {
		if (typeof socialLink === "undefined") return;
		window.open(
			socialLink,
			"_blank"
		);
	};
	return (
		<Card className={classes.card}>
			<CardActionArea onClick={() => handleSocialClick(website)}>
				{
					image ? <CardMedia className={classes.media} image={image} title="pfp-image"/> : <> </>
				}
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{action}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				{
					typeof socials.github !== "undefined" ?
						<IconButton onClick={() => handleSocialClick(socials.github)}>
							<GitHub />
						</IconButton> 
						: <> </>
				}
				{
					typeof socials.twitter !== "undefined" ? 
						<IconButton onClick={() => handleSocialClick(socials.twitter)}> 
							<Twitter /> 
						</IconButton>
						: <> </>
				}
				{
					typeof socials.reddit !== "undefined" ? 
						<IconButton onClick={() => handleSocialClick(socials.reddit)}>
							<Reddit />
						</IconButton> 
						: <> </>
				}
			</CardActions>
		</Card>

	);
};

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & { children?: React.ReactElement<any, any> },
	ref: React.Ref<unknown>,
) {
	return <Grow  ref={ref} {...props} />;
});
const Credits: React.FC<CreditsProps> = ({onClose, open}: CreditsProps) => {
	const classes = useStyles();
	return (
		<> 
			<Dialog scroll="body" TransitionComponent={Transition} className={classes.dialog} onClose={onClose} open={open} fullWidth maxWidth="sm">
				<DialogTitle>Credits</DialogTitle>
				<DialogContent style={{height: 360}}>
					<DialogContentText>
						Original Idea from <a href="https://takeb1nzyto.space">Take B1nzy to Space</a>
						Planets from <a href="https://www.vecteezy.com/free-vector/globe">Vecteezy</a>
					</DialogContentText>
					<Grid container className={classes.cardcontainer} spacing={2}>
						<Grid item xs={12}>
							<Grid container justify="center" spacing={4}> 
								{CreditsList.map((value, index) => (
									<Grid item key={index}>
										<CreditsCard data={value}/>
									</Grid> 
								))}
							</Grid>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<IconButton onClick={() => window.open("https://github.com/qpixel/takeludwigtospace", "_blank")}>
						<GitHub />
					</IconButton>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Credits;