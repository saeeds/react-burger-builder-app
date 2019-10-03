import React from "react";
import styles from "./tool-bar.styles.css";
import Logo from "../../logo/logo.component";
import NavigationItems from "../navigation-items/navigation-items.component";

const toolbar = () => (
  <header className={styles.Toolbar}>
    <Logo />
    <NavigationItems />
  </header>
);

export default toolbar;
