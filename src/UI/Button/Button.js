import React from 'react';
import './Button.css';

const button= (props) => (
    <button className={['buttons', props.type].join(' ')} onClick={props.clicked}>
        {props.children}
    </button>

);

export default button;