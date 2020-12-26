import React from 'react';
import Alert from "@material-ui/lab/Alert";


const BaseAlert = props => <Alert {...props} variant="filled" severity={props.severity} className={'alert'} /> ;

export default BaseAlert;