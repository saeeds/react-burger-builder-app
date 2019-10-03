import React from "react";
import styles from "./side-drawer.styles.css";
import Logo from '../../logo/logo.component';
import NavigationItems from "../navigation-items/navigation-items.component";
const sideDrawer = props => {
  return (
      <div className={styles.SideDrawer}>
          <Logo />
          <nav>
          <NavigationItems></NavigationItems>
          </nav>
             
      </div>
  );
};

export default sideDrawer;
