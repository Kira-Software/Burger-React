import React from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../App.css';
import Backdrop from '../Backdrop/backdrop';
import Aux from '../../hoc/Auxilary';
const modal= props =>{
    return(
        <Aux>
            <Backdrop show={props.show} cancel={props.cancel} />
        <div id='modal' 
            style={{
               // opacity:props.show? 1: 0,
                display: props.show? 'block': null
            }}
        >
            {props.children }
        </div>
        </Aux>
        
        
    );
     
}

export default modal;