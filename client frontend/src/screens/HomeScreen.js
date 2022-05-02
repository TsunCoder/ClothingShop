import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import Footer from "./../components/Footer";
import "../CSS/HomeScreen.css";
import { Link } from "react-router-dom";
const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div className="shopPage">
      <Header />
      <div className="top">
        <h4>Trade-in-offer</h4>

        <Link to="/ShopScreen">
          <button className="btn">Xem bộ sưu tập</button>
        </Link>
      </div>
      <div className="section-title text-center">
        <h2>Top sản phẩm mới nhất</h2>
      </div>
      <div className="product-row">
        <ShopSection keyword={keyword} pagenumber={pagenumber} />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
