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
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.removeIngredient(ctrl.type)}
        />
      ))}
    </div>
  );
};

export default buildControls;
