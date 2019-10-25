import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import Layout from './hoc/layout/layout.component';
import BurgerBuilder from './containers/burger-builder/burger-builder.component';
import Checkout from './containers/checkout/checkout.component';
import Orders from './containers/orders/orders.component';
import Auth from './containers/auth/auth.component';
import Logout from './containers/auth/logout/logout.component';
import * as actions from "./store/actions/index";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route exact path="/" component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (<Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/" component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>);
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
