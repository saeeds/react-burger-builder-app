import React, { Component } from "react";
//import styles from './orders.styles.css'
import Order from '../../components/order/order.component'
class Orders extends Component {
  render() {
    return <div>
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
    </div>;
  }
}
export default Orders;
