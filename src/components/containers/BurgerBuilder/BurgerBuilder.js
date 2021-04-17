import React, {Component} from 'react';

import Aux from '../../../hoc/Auxilary';
import Burger from '../../../Burger/Burger/Burger';
import BurgerControlers from '../BurgerControling/BurgerControlers';
import Summary from '../../summary/summary';
import Modal from '../../modal/modal';

const price={
    theBurgerSalad:10,
    theBurgerMeat: 30,
    theBurgerCheese: 20

}

class BurgerBuilder extends Component{

    state={
        ingredients:{
            theBurgerMeat:0,
            theBurgerSalad:0,
            theBurgerCheese:0
        },
        totalPrice: 10,
        purchasable:false,
        display:false
    }

    handleIncrement = (type)=>{
        const oldCount= this.state.ingredients[type];
        const updateCount=oldCount + 1;
        const copyList={...this.state.ingredients};
        copyList[type]= updateCount;

        const addedPrice=price[type];
        const oldTotal= this.state.totalPrice;
        const newPrice=oldTotal+addedPrice;

        this.setState({ingredients:copyList, totalPrice: newPrice});

        this.handlePurchase(copyList);


    }

    handleDecrement = (type)=>{
        const oldCount= this.state.ingredients[type];
        if(oldCount <= 0){
            return ;
        }
        const updateCount=oldCount - 1;
        const copyList={...this.state.ingredients};
        copyList[type]= updateCount;

        const addedPrice=price[type];
        const oldTotal= this.state.totalPrice;
        const newPrice=oldTotal-addedPrice;

        this.setState({ingredients:copyList, totalPrice: newPrice});

        this.handlePurchase(copyList);


    }

    handlePurchase(ingredients){
       

        const sale= Object.keys(ingredients).map(igkey => {
            return ingredients[igkey];
        }).reduce((sale,el) => {
            return sale+el;
        },0);

        this.setState({purchasable: sale>0 });
    }

    handledisplay = () => {
        this.setState({display:  true});
    }

    handleCancel= () =>{
        this.setState({display: false});
    }
    handleContinue= () => {
        alert('you can continue now');
    }

    render(){
        let disabledInfo={...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] <= 0;
        }
        return(
            <Aux className='wrapper'>
               <Burger ingredients={this.state.ingredients} />

                <Modal show={this.state.display} cancel={this.handleCancel}>
                     <Summary 
                     ingredients={this.state.ingredients}
                     cancel={this.handleCancel}
                     continue={this.handleContinue }
                    price={this.state.totalPrice} 
                     /> 
                </Modal>
                <BurgerControlers 
                addIngredient={this.handleIncrement}
                minusIngredient={this.handleDecrement}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                displayed={this.handledisplay} />

           
            </Aux>
            

        );

    }
}

export default BurgerBuilder;