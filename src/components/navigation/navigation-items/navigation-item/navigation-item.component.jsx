import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation-item.styles.css";
const navigationItem = props => {
  return (
    <li className={styles.NavigationItem}>
      <NavLink
        exact={props.exact}
        to={props.link}
        activeClassName={styles.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
