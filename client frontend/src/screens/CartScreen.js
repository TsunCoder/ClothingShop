import React, { useEffect } from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removefromcart } from "./../Redux/Actions/cartActions";
import "../CSS/Cart.css";

const CartScreen = ({ match, location, history }) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const checkOutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  const removeFromCartHandle = (id) => {
    dispatch(removefromcart(id));
  };
  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {cartItems.length === 0 ? (
          <div className=" alert alert-info text-center mt-3">
            Giỏ hàng trống
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{
                fontSize: "12px",
              }}
            >
              MUA SẮM NGAY
            </Link>
          </div>
        ) : (
          <>
            <div className=" alert alert-info text-center mt-3">
              Tổng số sản phẩm giỏ hàng
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>

            <div className="showinfo">
              <h5 className="showinfo-image">Ảnh sản phẩm</h5>
              <h5 className="showinfo-name">Tên sản phẩm</h5>
              <h5 className="showinfo-quantity">Số lượng</h5>
              <h5 className="showinfo-price">Đơn giá</h5>
            </div>

            {/* cartiterm */}
            {cartItems.map((item) => (
              <div className="showcart">
                <div
                  onClick={() => removeFromCartHandle(item.product)}
                  className="product-delete"
                >
                  <i className="fa fa-trash "></i>
                </div>
                <div className="product-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="product-name">
                  <Link to={`/products/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="product-quantity">
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="product-price">
                  <h4>${item.price}</h4>
                </div>
              </div>
            ))}

            {/* End of cart iterms */}
            <div className="total">
              <span className="sub">TỔNG CỘNG:</span>
              <span className="total-price">${total}</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6 ">
                <button>Tiếp tục mua sắm</button>
              </Link>
              {total > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={checkOutHandler}>Thủ tục thanh toán</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartScreen;
