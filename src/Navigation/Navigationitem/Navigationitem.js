import React from 'react';
import './Navigationitem.css';

const navigationitem= (props) => (
    <li className='navigationitem'>
        <a href={props.link}>{props.children}</a>
    </li>
);

export default navigationitem;