import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import styles from "./layout.component.jsx";

const Layout = props => {
  return (
    <Auxiliary>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
