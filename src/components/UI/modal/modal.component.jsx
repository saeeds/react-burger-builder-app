import React from "react";
import styles from "./modal.styles.css";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../backdrop/backdrop.component";
const modal = props => {
  const modalStyle = {
    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
    opacity: props.show ? "1" : "0"
  };
  return (
    <Auxiliary>
      <Backdrop clicked={props.modalClosed} show={props.show} />
      <div className={styles.Modal} style={modalStyle}>
        {props.children}
      </div>
    </Auxiliary>
  );
};

export default modal;
