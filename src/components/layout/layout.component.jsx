import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import styles from "./layout.styles.css";
import Toolbar from "../navigation/tool-bar/tool-bar.component";
import SideDrawer from "../navigation/side-drawer/side-drawer.component";
const Layout = props => {
  return (
    <Auxiliary>
      <Toolbar />
      <SideDrawer />
      <main className={styles.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
