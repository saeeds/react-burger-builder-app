import React, { Component } from "react";
import { connect } from "react-redux";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary.component";
import Burger from "../../components/burger/burger.component";
import BuildControls from "../../components/burger/build-controls/build-controls.component";
import Modal from "../../components/UI/modal/modal.component";
import OrderSummery from "../../components/burger/order-summery/order-summery.component";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/spinner/spinner.component";
import withErrorHandler from "../../hoc/with-error-handler/with-error-handler.component";
import * as burgerBuilderActions from "../../store/actions/index";

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    error: state.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName =>
      dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: ingName =>
      dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
  };
};

class BurgerBuilder extends Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  purchaseHandler = () => this.setState({ purchasing: true });

  purchaseCancelHandler = () => this.setState({ purchasing: false });

  purchaseContinueHandler = () => this.props.history.push("/checkout");

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0;
  }

  render() {
    const disableInfo = {
      ...this.props.ings
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummery = null;
    let burger = this.props.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      burger = (
        <Auxiliary>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemove={this.props.onIngredientRemoved}
            disabled={disableInfo}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            price={this.props.price}
          />
        </Auxiliary>
      );

      orderSummery = (
        <OrderSummery
          ingredients={this.props.ings}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.props.price}
        />
      );
    }
    return (
      <Auxiliary>
        <Modal
          modalClosed={this.purchaseCancelHandler}
          show={this.state.purchasing}
        >
          {orderSummery}
        </Modal>
        {burger}
      </Auxiliary>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));

// componentDidMount() {
// axios
//   .get("/ingredients.json")
//   .then(response => {
//     this.setState({ ingredients: response.data });
//   })
//   .catch(error => {
//     this.setState({ error: true });
//   });
//}
// purchaseContinueHandler = () => {
//   const queryParams = [];
//   for (let ingredient in this.state.ingredients) {
//     queryParams.push(
//       `${encodeURIComponent(ingredient)}=${encodeURIComponent(
//         this.state.ingredients[ingredient]
//       )}`
//     );
//   }
//   queryParams.push("price=" + this.props.totalPrice);
//   const queryString = queryParams.join("&");
//   this.props.history.push({
//     pathname: "/checkout",
//     search: `?${queryString}`
//   });
// };
// addIngredientHandler = type => {
//   const oldCount = this.state.ingredients[type];
//   const updatedCount = oldCount + 1;
//   const UpdatedIngredients = {
//     ...this.state.ingredients
//   };
//   UpdatedIngredients[type] = updatedCount;
//   const priceAddition = INGREDIENT_PRICES[type];
//   const oldPrice = this.state.totalPrice;
//   const newPrice = oldPrice + priceAddition;
//   this.setState({
//     ingredients: UpdatedIngredients,
//     totalPrice: newPrice
//   });
//   this.updatePurchaseState(UpdatedIngredients);
// };

// removeIngredientHandler = type => {
//   const oldCount = this.state.ingredients[type];
//   if (oldCount <= 0) {
//     return;
//   }
//   const updatedCount = oldCount - 1;
//   const UpdatedIngredients = {
//     ...this.state.ingredients
//   };
//   UpdatedIngredients[type] = updatedCount;
//   const priceRemove = INGREDIENT_PRICES[type];
//   const oldPrice = this.state.totalPrice;
//   const newPrice = oldPrice - priceRemove;
//   this.setState({
//     ingredients: UpdatedIngredients,
//     totalPrice: newPrice
//   });
//   this.updatePurchaseState(UpdatedIngredients);
// };
