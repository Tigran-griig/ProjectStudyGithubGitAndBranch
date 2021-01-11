import React,{useState} from 'react';
import {Header as BaseHeader, TransitionsModal} from '../Components'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import List from "@material-ui/core/List";
import {secondaryListItems} from "../Components/listItems";
import {connect} from "react-redux";



const Header = (props,{avatar}) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);



    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <List>{secondaryListItems}</List>
        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <List>{secondaryListItems}</List>

            </MenuItem>
        </Menu>
    );
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };



    return (
        <div>
        <BaseHeader
            avatar={avatar}
            handledraweropen={handleDrawerOpen}
            handledrawerclose={handleDrawerClose}
            open={open}
            menuid={menuId}
            handleprofilemenuopen={handleProfileMenuOpen}
            mobilemenuid={mobileMenuId}
            handlemobilemenuopen={handleMobileMenuOpen}
            rendermobilemenu={renderMobileMenu}
            rendermenu={renderMenu}
            {...props}
        />

        </div>
    )
}


export default connect(({avatar})=>({avatar:avatar.items}))(Header)