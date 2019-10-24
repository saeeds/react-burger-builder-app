import React from "react";
import styles from "./navigation-items.styles.css";
import NavigationItem from "./navigation-item/navigation-item.component";
const navigationItems = props => (
  <ul className={styles.NavigationItems}>
    <NavigationItem exact link="/">
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/Orders">Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Sign In</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
  </ul>
);
export default navigationItems;
