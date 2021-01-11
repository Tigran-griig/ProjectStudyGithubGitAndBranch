import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion} from "../index";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
    root: {
        height: '500px',
    },
    image: {
        width: '100%',
        maxWidth: 600,
        height: '500px',
        maxHeight: 500,

    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        width: '100%',
        maxWidth: 500,
            alignItems: 'center',
         alignCenter:'center',
        alignText:'center'
    }
    }));

const AboutMe = ({user,onSelectFiles,avatar,sendAvatar}) => {
    const classes = useStyles()
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={true} sm={4} md={7} component={Paper}   >
                {avatar?<img  src={avatar} className={classes.image}/>:<Typography variant="h2" color={'textSecondary'} className={classes.title}>Ավելացրեք նկար</Typography>}
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
           <Accordion sendAvatar={sendAvatar} avatar={avatar} onSelectFiles={onSelectFiles} user={user} />
                </div>
            </Grid>
        </Grid>

)
};

export default connect(
    ({user})=>({user:user.data}))(AboutMe);