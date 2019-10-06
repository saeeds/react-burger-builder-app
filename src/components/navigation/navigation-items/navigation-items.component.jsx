import React from "react";
import styles from "./navigation-items.styles.css";
import NavigationItem from "./navigation-item/navigation-item.component";
const navigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem exact link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/Orders">Orders</NavigationItem>
  </ul>
);
export default navigationItems;
