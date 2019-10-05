import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary.component";
import Button from '../../UI/button/button.component'
const orderSummery = props => {
  const ingredientSummery = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummery}</ul>
      <p><strong>Total Price: </strong>{props.price.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button bntType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button bntType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
    </Auxiliary>
  );
};

export default orderSummery;
