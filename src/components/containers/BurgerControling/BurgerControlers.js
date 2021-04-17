import React from 'react';
import '../../../App.css';

import BurgerControl from './BurgerControl';
import '../../../assets/css/bootstrap.min.css';

const controls=[
    {label:'Salad', type:'theBurgerSalad'},
    {label:'Meat', type:'theBurgerMeat'},
    {label:'Cheese', type:'theBurgerCheese'}
]


const BurgerControlers= (props) => {
    return(
       
        <div className='burgerControlers'>
             <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            return(
                <BurgerControl 
                label={ctrl.label} 
                key={ctrl.label}
                added={() => props.addIngredient(ctrl.type)}
                minused={() => props.minusIngredient(ctrl.type) }
                disabled={props.disabled[ctrl.type]}
                />
            );
            
        }
        )
        }
        <button disabled={! props.purchasable} 
        className='btn btn-danger'
        onClick={props.displayed}>Order Now</button>
    </div>
    );
    

}

export default BurgerControlers;