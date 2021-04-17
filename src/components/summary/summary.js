import React from 'react';
import Auxilary from '../../hoc/Auxilary';
import Button from '../../UI/Button/Button';
const summary= props =>{
    const isummary= Object.keys(props.ingredients).map(igkey => {
        return(
            <li key={igkey}><span>{igkey} : </span>{props.ingredients[igkey]}</li>
        );
    });

    return(
        <Auxilary>
            <h3>your orders are</h3>
            <ul>
                {isummary}
            </ul><br/>
            <p><strong>Total Price : {props.price}</strong></p>
            <Button type='danger' clicked={props.cancel}>Cancel</Button>
            <Button type='success' clicked={props.continue}>Continue</Button>

        </Auxilary>
    );
}

export default summary;