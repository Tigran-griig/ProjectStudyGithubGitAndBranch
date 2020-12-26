import React from 'react';
import './Block.scss'
// import PropTypes from 'prop-types'
import classNames from 'classnames'


const Block = ({children,className}) => (
    <div className={classNames('block',className)}>{children}</div>
);



// Block.propTypes ={
//     className:PropTypes.string
// }

export default Block;