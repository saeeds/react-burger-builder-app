import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/layout/layout.component';
import BurgerBuilder from './containers/burger-builder/burger-builder.component';
import Checkout from './containers/checkout/checkout.component';
import Orders from './containers/orders/orders.component';
import Auth from './containers/auth/auth.component';
import Logout from './containers/auth/logout/logout.component';

function App() {
  return (
    <div >
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}
export default App;
