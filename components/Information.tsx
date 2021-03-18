import { Card, makeStyles } from "@material-ui/core";
import React, { ReactElement } from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
	},
}));

const InformationCard: React.FC = (): ReactElement => {
	const classes = useStyles();
	return <Card className={classes.root}></Card>;
};

export default InformationCard;
