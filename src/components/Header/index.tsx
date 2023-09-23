import React from "react";
import { Link } from "react-router-dom";

import Logo from '../../medium-logo.svg';

import { Wrapper, Content, LogoImg } from "./Header.styles";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    appbar: {
        backgroundColor: '#C4E2FF',
        paddingTop: '10px',
        paddingBottom: '10px'
    },
    title: {
        flexGrow: 1,
        marginLeft: 5,
        color: '#000000'
    },
    logoimg: {
        paddingLeft: '50px'
    },
    barButton: {
        color: '#000000'
    },
    getStarted: {
        backgroundColor: '#000000',
        color: '#fff',
        borderRadius: 50
    }
}));

const Header: React.FC = () => {

    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <LogoImg src={Logo} alt='logo-img' className={classes.logoimg} />
                <Typography variant="h4" className={classes.title}>
                    Medium
                </Typography>
                <Button className={classes.barButton} color="inherit">Our Story</Button>
                <Button className={classes.barButton} color="inherit">Membership</Button>
                <Button className={classes.barButton} color="inherit">Write</Button>
                <Button className={classes.barButton} color="inherit">Sign In</Button>
                <Button variant="contained" className={classes.getStarted} disableElevation>Get started</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;