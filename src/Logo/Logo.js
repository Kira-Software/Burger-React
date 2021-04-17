import React from 'react';
import burgerLogo from '../images/burger-logo.png';
import './Logo.css';


const logo= (props) =>(
    <div className='mainLogo'>
        <img src={burgerLogo} alt='the burger logo' className='logo'/>
    </div>

);

export default logo;