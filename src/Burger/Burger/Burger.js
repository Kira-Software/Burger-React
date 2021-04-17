import React from 'react';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import '../../App.css';
const burger= (props) => {

    let transformedObject= Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_,i) =>{
           return <BurgerIngredient key={igkey+i} type={igkey}/>
        })
    }
    ).reduce((arr,el) => {
           return arr.concat(el)
    },[]);

    if(transformedObject.length === 0){
        transformedObject=<p className='burgerText'><b>please start addin ingredients</b> </p> ;
    }
    return(
        <div className='theBurger'>
             <BurgerIngredient type='theBurgerTop' />
          {transformedObject}
            <BurgerIngredient type='theBurgerBottom' />
        </div>
       
    );
    

}

export default burger;