import React from 'react';
import Navigationitem from '../Navigationitem/Navigationitem';
import './Navigationitems.css';

const navigationitems= (props) => (
    <ul className='navigationitems'>
        <Navigationitem link='/'> BurgerBuilder</Navigationitem>
        <Navigationitem link='/'> Checkout</Navigationitem>
    </ul>
);

export default navigationitems;