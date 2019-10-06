import React, { Component } from "react";
import Button from "../../../components/UI/button/button.component";
import styes from "./contact-data.styles.css";
import Spinner from "../../../components/UI/spinner/spinner.component";
import axios from "../../../axios-orders";
class Contactdata extends Component {
  state = {
    ingredients: [],
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({
      loading: true
    });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "saeed alsharqawi",
        address: {
          street: "Test street 1",
          zipCode: "41351",
          country: "Germany"
        },
        email: "saed_sharqawi@hotmail.com"
      },
      deliveryMethod: "fastest"
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({
          loading: false
        });
        this.props.history.push('/')
        console.log(response);
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  };
  render() {
    let form = (
      <form>
        <input
          className={styes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={styes.Input}
          type="text"
          name="email"
          placeholder="Your Mail"
        />
        <input
          className={styes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={styes.Input}
          type="text"
          name="street"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if(this.state.loading){
      form = <Spinner/>
    }
    return (
      <div className={styes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default Contactdata;
