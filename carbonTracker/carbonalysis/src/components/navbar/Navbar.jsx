import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import carbonalysisLogo from './carbonalysisLogo.png';
import { Link, BrowserRouter as Router, NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: "6px",
        paddingBottom: "6px",
        backgroundColor: "white"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: "black",
        padding: "5px",
        fontWeight: "400",
        marginLeft: "40px",
        fontSize: "20px"
    },
}));

export default function Navbar({ token }) {
    const classes = useStyles();    
  
    return (
        <div className = {styles.navbar}>
            <AppBar position="fixed" className = {styles.navbar}>
                <Toolbar style={{background: "lavender"}} className = {styles.toolbar}>
                    <a href="/" className={styles.logo1}>
                        <span className={styles.logo}>C-Emission Tracker</span>
                    </a>
                    <Typography variant="h6" className={classes.title}> </Typography>
                        {
                            token ?
                            <nav style = {{marginRight: "60px"}}>
                                <NavLink to="/dashboard" className={styles.link}>Dashboard</NavLink>
                                <NavLink to="/carbon-emissions" className={styles.link} >Calculate Emissions</NavLink>
                                <NavLink to="/carbon-footprint" className={styles.link}>Calculate Footprint</NavLink>
                                {/* <NavLink to="/leaderboard" className={styles.link}>Leaderboard</NavLink> */}
                                <NavLink to="/logout" className={styles.link}>Logout</NavLink>
                            </nav>
                            :
                            <nav style = {{marginRight: "60px"}}>
                                <NavLink to="/login" className={styles.link}>Login</NavLink>
                            </nav>
                        }
                </Toolbar>
            </AppBar>
        </div >
    );
}
