import React from 'react';
import '../../../App.css';
import '../../../assets/css/bootstrap.min.css';


const BurgerControl= (props) => {
    return(
         <div className='burgerControl'>
        <span className='ControlLabel'>{props.label}</span>
        <button className='ControlMoreBtn' onClick={props.added}>More</button>
        <button className='ControlLessBtn ' onClick={props.minused} disabled={props.disabled}>Less</button>
    </div>
    );
   

}

export default BurgerControl;