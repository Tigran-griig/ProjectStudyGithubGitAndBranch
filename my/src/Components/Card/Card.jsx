import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {format} from "date-fns";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
        width:'50px',
        height:'50px',
    },
    img:{
        width:'50px',
        height:'50px',
    }
}));

export default function RecipeReviewCard(
    {
        fullName,
        text,
        aboutProducts,
        phone,
        price,
        url,
        createdAt,
        avatar,
        id,
        handleRemoveProduct

    }

) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    avatar ?( <Avatar aria-label="recipe" className={classes.avatar}>
                                <img className={classes.img} src={avatar} />
                            </Avatar>)
                            :(
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    {fullName.substr(0,1)}
                                </Avatar>)


                }
                action={
                    handleRemoveProduct ? <IconButton aria-label="settings" onClick={handleRemoveProduct}>
                        <HighlightOffIcon />
                    </IconButton>:<></>
                }
                title={fullName?fullName:''}
            />
            <CardMedia
                className={classes.media}
                image={url}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {text}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    կապնվեք մեզ հետ այս հեռախոսահամարով {phone}
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
                {format(new Date(createdAt), 'MM/dd/yyyy')}
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Գինը ${price}
                    </Typography>
                    <Typography paragraph>

                        Լրացուցիչ տեղեկություն։ {aboutProducts}
                    </Typography>
                </CardContent>
            </Collapse>

        </Card>
    );
}