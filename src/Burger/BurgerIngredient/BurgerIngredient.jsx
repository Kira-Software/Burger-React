import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render(){

        let Ingredient=null;

        switch(this.props.type){
            case 'theBurgerTop':
                Ingredient=(
                    <div >
                    <div className='theBurgerTop'></div>
                    <div className='theBurgerSeeds1'></div>
                    <div className='theBurgerSeeds2'></div>
                    <div className='theBurgerSeeds3'></div>
                    <div className='theBurgerSeeds4'></div>
    
                    </div>
                );
                break;
            
            case 'theBurgerMeat':
                   Ingredient=<div className='theBurgerMeat'></div>
                    break;
             case 'theBurgerCheese':
                   Ingredient=<div className='theBurgerCheese'></div>
                    break;
            case 'theBurgerSalad':
                   Ingredient=<div className='theBurgerSalad'></div>
                    break;
           case 'theBurgerBottom':
                   Ingredient=<div className='theBurgerBottom'></div>
                    break;
            default: 
                    Ingredient=null;
                
        }
        return Ingredient;

    }
   
}

BurgerIngredient.propTypes={
    type:PropTypes.string.isRequired
};

export default BurgerIngredient;