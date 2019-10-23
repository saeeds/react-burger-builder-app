import React, { Component } from "react";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";
import Contactdata from "./contact-data/contact-data.component";
import CheckoutSummery from "../../components/order/checkout-summery/checkout-summery.component";

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilde.ingredients,
    purchased: state.order.purchased
  };
};

class Checkout extends Component {
  checkoutCancelledHandler = () => this.props.history.goBack();

  checkoutContinuedHandler = () =>
    this.props.history.replace("/checkout/contact-data");

  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;

      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummery
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
            ingredients={this.props.ings}
          />
          <Route
            path={`${this.props.match.path}/contact-data`}
            component={Contactdata}
          />
        </div>
      );
    }

    return summary;
  }
}

export default connect(mapStateToProps)(Checkout);

// state = {
//   ingredients: null,
//   totalPrice: 0
// };

// componentWillMount() {
//   const query = new URLSearchParams(this.props.location.search);
//   const ingredients = {};
//   let price = 0;
//   for (let param of query.entries()) {
//     if (param[0] === "price") {
//       price = param[1];
//     } else {
//       ingredients[param[0]] = +param[1];
//     }
//   }
//   this.setState({ ingredients: ingredients, totalPrice: price });
// }
