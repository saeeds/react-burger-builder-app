import React, { Component } from "react";
//import styles from './orders.styles.css'
import Order from "../../components/order/order.component";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/with-error-handler/with-error-handler.component";
class Orders extends Component {
  state = {
    Orders: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }

        this.setState({ loading: false, Orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.Orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}
export default withErrorHandler(Orders, axios);
