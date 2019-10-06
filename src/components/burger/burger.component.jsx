import React from "react";
import styles from "./burger.styles.css";
import BurgerIngredient from "./burger-ingredient/burger-ingredient.component";
const burger = props => {
  let tarnsformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if(tarnsformedIngredients.length === 0){
      tarnsformedIngredients = <p>Please start adding ingredients!</p>
    }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {tarnsformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
