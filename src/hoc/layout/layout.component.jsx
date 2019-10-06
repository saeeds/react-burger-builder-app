import React, { Component } from "react";
import Auxiliary from "../Auxiliary/Auxiliary.component";
import styles from "./layout.styles.css";
import Toolbar from "../../components/navigation/tool-bar/tool-bar.component";
import SideDrawer from "../../components/navigation/side-drawer/side-drawer.component";
class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;