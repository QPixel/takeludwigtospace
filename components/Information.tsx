import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";

const useStyles = makeStyles((theme) => ({
	root: {

	},
	card: {
		width: "100%",
		marginTop: "auto",
		backgroundColor: "transparent",
	},
	box: {
		flexGrow: 1,
		marginTop: 500,
		marginLeft: 600,
		color: "white"
	},
	title: {
		fontSize: 40,
		color: "white",
		fontWeight: "bold"
	}
}));

const InformationCard: React.FC = (): ReactElement => {
	const classes = useStyles();
	return (
		<Grid container direction="column" className={classes.box} item xs={5}>
			<Grid item
				container
				direction="column"
				alignItems="flex-end"
				justify="flex-end">
				<Card className={classes.card}>
					<CardContent>
						<Typography variant="h1" className={classes.title} color="textSecondary" gutterBottom>
						Take Ludwig to Space!
						</Typography>
					</CardContent>

				</Card>
			</Grid>
		</Grid> 
	);
	// return <Card className={classes.root}></Card>;
};

export default InformationCard;
