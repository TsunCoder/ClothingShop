import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Actions/cartActions";
import "../CSS/ShippingScreen.css";
import Footer from "../components/Footer"

const ShippingScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };
  return (
    <>
      <Header />
      <div className="container-shipping d-flex justify-content-center align-items-center login-center">
        <form
          className="Shipping col-md-5 col-lg-5 col-11"
          onSubmit={submitHandler}
        >
          <h2>Địa chỉ giao hàng</h2>
          <div className="inputAddress">
            <input
              type="text"
              placeholder="Địa chỉ"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Tỉnh"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mã thẻ thanh toán"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <input
              type="text"
              placeholder="Quốc gia"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <button type="submit">Phương thức thanh toán</button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default ShippingScreen;
