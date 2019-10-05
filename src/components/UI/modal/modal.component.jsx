import React, { Component } from "react";
import styles from "./modal.styles.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary.component";
import Backdrop from "../backdrop/backdrop.component";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate() {
    console.log("[Modal] WillUpdate");
  }

  render() {
    const modalStyle = {
      transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: this.props.show ? "1" : "0"
    };

    return (
      <Auxiliary>
        <Backdrop clicked={this.props.modalClosed} show={this.props.show} />
        <div className={styles.Modal} style={modalStyle}>
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
