import React from "react";
import styles from "./build-controls.styles.css";
import BuildControl from "./build-control/build-control.component";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const buildControls = props => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price: <strong> {props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemove(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        disabled={!props.purchasable} 
        className={styles.OrderButton}
        onClick={props.ordered}
        >
        {props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
      </button>
    </div>
  );
};

export default buildControls;
