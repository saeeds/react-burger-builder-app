import React from "react";
import styles from "./button.styles.css";
const button = props => {
  return (
    <button
      className={[styles.Button, styles[props.bntType]].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
