import React from "react";
import styles from "./modal.styles.css";
const modal = props => {
  const modalStyle = {
    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
    opacity: props.show ? "1" : "0"
  };
  return (
    <div className={styles.Modal} style={modalStyle}>
      {props.children}
    </div>
  );
};

export default modal;
