import React from "react";
import styles from "./tool-bar.styles.css";
import Logo from "../../logo/logo.component";
import NavigationItems from "../navigation-items/navigation-items.component";
import DrawerToggle from "../side-drawer/drawer-toggle/drawer-toggle.component";
const toolbar = props => (
  <header className={styles.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);
export default toolbar;
