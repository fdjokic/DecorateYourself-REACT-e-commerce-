import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <SideBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route exact path="/product/:id" children={<SingleProduct />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
