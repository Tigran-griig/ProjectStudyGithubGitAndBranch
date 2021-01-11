import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from '../listItems';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import {Route} from "react-router-dom";

const Header = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, props.open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handledraweropen}
                        className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Route path={'/history'}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>

                    </Route>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            {props.fullname}
                        </Typography>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={props.menuid}
                            aria-haspopup="true"
                            onClick={props.handleprofilemenuopen}
                            color="inherit"
                        >
                            <Avatar alt="Remy Sharp" src={props.avatar} />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={props.mobilemenuid}
                            aria-haspopup="true"
                            onClick={props.handlemobilemenuopen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {props.rendermobilemenu}
            {props.rendermenu}
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
                }}
                open={props.open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={props.handledrawerclose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container {...props} maxWidth="lg" className={classes.container} />
            </main>
        </div>
    );
};

export default Header;