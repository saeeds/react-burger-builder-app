import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-c6548.firebaseio.com/"
});

export default instance;
