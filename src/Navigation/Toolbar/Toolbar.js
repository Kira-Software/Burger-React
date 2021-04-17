import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';

const toolbar = (props) => (
        <header className='toolbar'>
            <div>Menu</div>
           <Logo />
           <Navigationitems />
        </header>
);

export default toolbar;