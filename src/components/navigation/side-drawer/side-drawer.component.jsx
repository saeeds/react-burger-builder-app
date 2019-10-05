import React from "react";
import styles from "./side-drawer.styles.css";
import Logo from "../../logo/logo.component";
import NavigationItems from "../navigation-items/navigation-items.component";
import Backdrop from "../../UI/backdrop/backdrop.component";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary.component";
const sideDrawer = props => {
  let attechedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attechedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attechedClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Auxiliary>
  );
};

export default sideDrawer;
