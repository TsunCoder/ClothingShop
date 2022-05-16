import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/cartActions";
import Header from "../components/Header";
import '../CSS/PaymentMethod.css'
import '../components/Footer'
import Footer from "../components/Footer";
const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <>
      <Header />
      <div className="container-payment d-flex justify-content-center align-items-center login-center">
        <form
          className="paymentMethod col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h3>Chọn phương thức thanh toán</h3>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">PayPal</label>
            </div>
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">Ship tận răng</label>
            </div>
          </div>

          <button type="submit">Continue</button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default PaymentScreen;
