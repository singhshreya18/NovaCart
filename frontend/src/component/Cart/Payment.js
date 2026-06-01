import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import CheckoutSteps from "./CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../actions/orderAction";
import "./payment.css";

const Payment = ({ history }) => {
  const dispatch = useDispatch();

  const orderInfo =
    JSON.parse(sessionStorage.getItem("orderInfo")) || {
      subtotal: 0,
      tax: 0,
      shippingCharges: 0,
      totalPrice: 0,
    };

  const { shippingInfo, cartItems } = useSelector(
    (state) => state.cart
  );

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    order.paymentInfo = {
      id: "COD_PAYMENT",
      status: "succeeded",
    };

    dispatch(createOrder(order));

    history.push("/success");
  };

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />

      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={submitHandler}>
          <Typography>Cash On Delivery</Typography>

          <input
            type="submit"
            value={`Place Order - ₹${orderInfo.totalPrice}`}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;