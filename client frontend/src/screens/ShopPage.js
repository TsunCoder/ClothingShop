import React from "react";
import "../CSS/ShopScreen.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopSection from "../components/homeComponents/ShopSection";

const ShopScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <section className="page-header">
        <h2>#stayhome</h2>
      </section>
      <div className="section-title text-center">
        <h2>Tất cả sản phẩm</h2>
      </div>
      <div className="product-row">
        <ShopSection keyword={keyword} pagenumber={pagenumber} />
      </div>
      <Footer />
    </div>
  );
}

export default ShopScreen;
