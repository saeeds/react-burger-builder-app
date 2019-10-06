import React, { Component } from "react";
//import styles from "./checkout.styles.css";
import CheckoutSummery from "../../components/order/checkout-summery/checkout-summery.component";
class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummery
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutCancelledHandler}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default Checkout;
