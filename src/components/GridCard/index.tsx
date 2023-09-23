import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
// Styles
import { Card } from "./GridCard.styles";
// Types
type OwnProps = {
    title: string;
    heading: string;
    details: string;
}

const useStyles = makeStyles(() => ({
    cardTitle: {
        fontWeight: 600,
        paddingLeft: '10px'
    },
    cardHeading: {
        fontWeight: 700,
        paddingLeft: '10px'
    },
    cardDetail: {
        paddingLeft: '10px'
    }
}));

const GridCard: React.FC<OwnProps> = (props) => {
    const { title, heading, details } = props;
    const classes = useStyles();

    return (
        <Card>
            <Typography variant="body1" className={classes.cardTitle} >{title}</Typography>
            <Typography variant="h6" className={classes.cardHeading} >{heading}</Typography>
            <br />
            <Typography variant="subtitle2" className={classes.cardDetail}>{details}</Typography>
        </Card>
    );
};

export default GridCard;