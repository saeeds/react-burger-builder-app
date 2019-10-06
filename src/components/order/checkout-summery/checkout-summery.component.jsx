import React from "react";
import Burger from "../../burger/burger.component";
import Button from "../../UI/button/button.component";
import styles from "./checkout-summery.styles.css";
const checkoutSummery = props => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button bntType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button bntType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummery;
