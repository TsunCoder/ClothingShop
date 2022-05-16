import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomePage";
import ProductInfo from "./screens/ProductInfo";
import Login from "./screens/LoginPage";
import Register from "./screens/RegisterPage";
import CartScreen from "./screens/CartPage";
import ShippingScreen from "./screens/ShippingPage";
import ProfilePage from "./screens/ProfilePage";
import PaymentScreen from "./screens/PaymentPage";
import PlaceOrderScreen from "./screens/PlaceOrderPage";
import OrderScreen from "./screens/OrderPage";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import ShopScreen from "./screens/ShopPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/page/:pagenumber" component={HomeScreen} exact />
        <Route path="/ShopScreen" component={ShopScreen} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
          exact
        />
        <Route path="/products/:id" component={ProductInfo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRouter path="/profile" component={ProfilePage} />
        <Route path="/cart/:id?" component={CartScreen} />
        <PrivateRouter path="/shipping" component={ShippingScreen} />
        <PrivateRouter path="/payment" component={PaymentScreen} />
        <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
        <PrivateRouter path="/order/:id" component={OrderScreen} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
