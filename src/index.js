import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";

import cartReducer from "./ducks/cart";
import productsReducer from "./ducks/products";
import productsData from "./data/products";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

let store = createStore(rootReducer, { products: productsData });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
