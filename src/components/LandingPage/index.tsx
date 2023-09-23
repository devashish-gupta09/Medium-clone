import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import Image_ from '../../5396346.png';

import { Wrapper, Content, Image } from './LandingPage.styles';

const useStyles = makeStyles(() => ({
    homeButton: {
        fontSize: 13
    }
}));
const LandingPage: React.FC = () => {
    const classes = useStyles();

    return (
        <Wrapper>
            <Content>
                <div>
                    <Typography variant="h1">
                        Medium is a place to write, read, and connect
                    </Typography>
                    <p>It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
                    <Button variant="outlined">
                        <Typography variant="h6" className={classes.homeButton}>Start Writing</Typography>
                    </Button>
                </div>
            </Content>
            <Image src={Image_} alt='landing-image' />
        </Wrapper>
    );
};

export default LandingPage;