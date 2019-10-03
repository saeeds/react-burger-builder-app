import React from "react";
import styles from "./navigation-items.styles.css";
import NavigationItem from "./navigation-item/navigation-item.component";
const navigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active={true}>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);
export default navigationItems;
