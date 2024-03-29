import React from "react";
import styles from "./button.styles.css";
const button = props => {
  return (
    <button
      disabled={props.disabled}
      className={[styles.Button, styles[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
