import React from 'react';
import {Button as BaseButton} from '@material-ui/core'
import './Button.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const Button = props => {
    return (
        <BaseButton  {...props} className={classNames('button',props.className,{'button--large':props.size==='large'})} />
    );
};

Button.propTypes ={
    className:PropTypes.string

}

export default Button;