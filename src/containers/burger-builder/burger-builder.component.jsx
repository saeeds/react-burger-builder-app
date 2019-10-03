import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/burger/burger.component";
import BuildControls from "../../components/burger/build-controls/build-controls.component";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
};
export default class BurgerBuilder extends Component {
  //constructor(props) {
  //   super(props);
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const UpdatedIngredients = {
      ...this.state.ingredients
    };
    UpdatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: UpdatedIngredients,
      totalPrice: newPrice
    });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if(oldCount === 0){
      return;
    }
    const updatedCount = oldCount - 1;
    const UpdatedIngredients = {
      ...this.state.ingredients
    };
    UpdatedIngredients[type] = updatedCount;
    const priceRemove = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceRemove;
    this.setState({
      ingredients: UpdatedIngredients,
      totalPrice: newPrice
    });
  };

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          removeIngredient = {this.removeIngredientHandler}
        />
      </Auxiliary>
    );
  }
}
