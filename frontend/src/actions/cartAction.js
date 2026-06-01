import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

import axios from "axios";
import API_URL from "../api";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const response = await axios.get(
    `${API_URL}/api/v1/product/${id}`
  );

  console.log("FULL RESPONSE:", response);
  console.log("DATA:", response.data);

  const data = response.data;

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
      quantity,
    },
  });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};