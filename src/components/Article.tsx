import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import Image_ from '../vs.png';

const useStyles = makeStyles(() => ({
    contain: {
        paddingTop: '20px'
    },
    heading: {
        color: '#000000',
        fontSize: '50px',
        fontWeight: 600,
        paddingBottom: '10px'
    },
    bodytext: {
        color: '#000000',
        fontSize: '20px'
    }
}));

const Article: React.FC = () => {
    const classes = useStyles();

    return (
        <Container className={classes.contain}>
            <Typography variant="h1" className={classes.heading}>Will JetBrains Fleet Be a VSCode Killer?</Typography>
            <Typography variant="h5">My first impressions of the new JetBrains tool</Typography>
            <div>
            </div>
            <Typography variant="body1" className={classes.bodytext}>
                The VSCode editor has seen a massive adoption since its launch back in 2015. Why? Because It is lightweight, easy to use, and allows a ton of customization. Its plugins are an essential part of its ecosystem and why many Developers are hooked on it. Its native Typescript support excels and drives a lot of the Typescript community to use it.
            </Typography>
            <Typography variant="body1" className={classes.bodytext}>
                It has a few competitors though. There have been many attempts in the past to still its throne. Especially on the web development side, where it truly shines.
            </Typography>
            <Typography variant="body1" className={classes.bodytext}>
                JetBrains has been a big player in the IDE business for a long time. Until now, his biggest competitors for VSCode were IntelliJ IDEA and WebStorm. What were the most downsides of those VSCode competitors?
            </Typography>
            <Typography variant="body1" className={classes.bodytext}>
                <li>not free, a license is needed</li>
                <li>high boot-up times in comparison</li>
                <li>large footprint in memory and disk usage</li>
                <li>smaller plugin ecosystem</li>
                <li>UI is not intuitive</li>
                <li>complex for beginners</li>
                <li>constant indexing</li>
                <li>can’t run in Browsers</li>
            </Typography>
            <Typography variant="body1" className={classes.bodytext}>
                How is JetBrains planning to get back in the game? By launching the new IDE: JetBrains Fleet.
            </Typography>

            <Typography variant="h3">A Rewrite from Scratch</Typography>
            <Typography variant="body1" className={classes.bodytext}>
                The previously mentioned CONS are so baked into their fundamentals that they needed to start fresh if they wanted to ever get back in the Web Development race.
            </Typography>
            <Typography variant="body1" className={classes.bodytext}>
                The Fleet IDE has been re-built from scratch. No legacy UI elements. They have applied all their 20 years of experience in the field on it. They are just re-using what worked well in their previous and make them stand out: their code-processing engine. This feature is what makes their current IDE shine when it comes to code refactoring. That is one of the main reasons people would use IntelliJ Idea or Webstorm over VSCode.
            </Typography>
        </Container>
    );
};

export default Article;