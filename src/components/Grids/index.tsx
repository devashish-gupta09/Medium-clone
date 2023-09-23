import { Container, Typography, Paper, Grid, makeStyles, ButtonBase } from "@material-ui/core";
import React from "react";
import GridCard from "../GridCard"
import Article from "../Article"
// Styles
import { Wrapper, Content } from "./Grid.styles";
import { Link } from "react-router-dom";
// Types
type Props = {
    header: string;
}

const useStyles = makeStyles(() => ({
    contain: {
        paddingTop: '50px'
    },
    heading: {
        paddingBottom: '20px',
        fontWeight: 600,
        fontSize: 16
    }
}));

const Grids: React.FC = () => {
    const classes = useStyles();

    return (
        <Container className={classes.contain}>
            <Typography variant="h6" className={classes.heading}>TRENDING ON MEDIUM</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link to="../Article">
                        <Paper elevation={0}>
                            <GridCard
                                title="Jose Granja in Better Programming"
                                heading="Will JetBrains Fleet Be a VSCode Killer?"
                                details="Dec 2 · 6 min read"
                            />
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper elevation={0}>
                        <GridCard
                            title="S. Bear Bergman"
                            heading="Please Come And Be Fat"
                            details="Nov 14 · 6 min read"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper elevation={0}>
                        <GridCard
                            title="Ossiana Tepfenhart"
                            heading="I Work In Porn. I Know Why So Many Men Are Single"
                            details="Nov 16 · 7 min read"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper elevation={0}>
                        <GridCard
                            title="Gala Games in Gala Games Official Blog"
                            heading="Mirandus VOX Drop Coming Soon"
                            details="Nov 20 · 4 min read"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper elevation={0}>
                        <GridCard
                            title="Ilro Lee in Towards Data Science"
                            heading="A Hiring Manager Who Went Through 120 Resumes for a Junior Data Scientist..."
                            details="Nov 17 · 6 min read"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper elevation={0}>
                        <GridCard
                            title="Matt Charnock in The Bold Italic"
                            heading="Ivy Getty’s San Francisco Wedding Is Why We Need a Wealth Tax"
                            details="Nov 12 · 8 min read"
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    );
}

export default Grids;
