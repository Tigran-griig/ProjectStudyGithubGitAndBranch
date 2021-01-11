import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from 'react-router-dom'

export const mainListItems = (
    <div>
        <Link to={'/home'}>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
                <ListItemText primary="Գլխավոր էջ" />
        </ListItem>
            </Link>
        <Link to={'/ads'}>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
                <ListItemText primary="Ավելացնել ապրանք" />
        </ListItem>
        </Link>
        <Link to={'/history'}>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
                <ListItemText primary="Պատմություն" />
        </ListItem>
    </Link>

</div>
);

export const secondaryListItems = (
    <div>
        <Link to={'/ownpage'}>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
                <ListItemText primary="Անձնական էջ" />
        </ListItem>
        </Link>
        <Link to={'/exit'}>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
                <ListItemText primary="Դուրս գալ" />
        </ListItem>
        </Link>
    </div>
);