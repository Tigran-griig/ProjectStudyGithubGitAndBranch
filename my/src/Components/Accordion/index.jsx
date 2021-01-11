import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { format } from 'date-fns'
import { UploadField } from "@navjobs/upload";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Button} from "../index";



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));


export default function ControlledAccordions(
    {
        user,
        avatar,
        onSelectFiles,
        sendAvatar
    }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Տվյալներ</Typography>
                    <Typography className={classes.heading}>{user?user.fullname:''}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {user ? (
                        <Typography>
                         Անուն Ազգանուն:  {user.fullname}
                            <br/>
                         Էլ-հասցե: {user.email}
                         <br />
                         էջը ստեղծվել է:  {format(new Date(user.createdAt), 'MM/dd/yyyy')}
                    </Typography>):''}
                </AccordionDetails>
            </Accordion>
            {avatar ? (<></>)
                : (    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Նկար</Typography>
                    <Typography className={classes.secondaryHeading}>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <UploadField
                            onFiles={onSelectFiles}
                                containerProps={{
                                className: 'resume_import'
                            }}
                            containerProps={{
                                className: "chat-input__actions-upload-btn"
                            }}
                            uploadProps={{
                                accept: ".jpg,.jpeg,.png,.gif,.bmp",
                            }}
                        >
                            <IconButton >
                                <AddCircleOutlineIcon fontSize={"large"} />
                            </IconButton>
                        </UploadField>
                    </div>
                    <Button variant="contained" color="primary" onClick={sendAvatar} >Պահպանել</Button>
                </AccordionDetails>
            </Accordion>)}

        </div>
    );
}