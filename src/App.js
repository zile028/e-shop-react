import { Route, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import db from "./db";
import { useState } from "react";
import { useEffect } from "react";
import CartPage from "./pages/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let cartItemIndex = null;
    let chekCart = cart.find((el, index) => {
      cartItemIndex = index;
      return el.id === product.id;
    });

    if (chekCart) {
      let tempCart = [...cart];
      tempCart[cartItemIndex].count++;
      setCart(tempCart);
    } else {
      product.count = 1;
      setCart([...cart, product]);
    }
  };

  return (
    <>
      <Navigation cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage products={db} />} />
        <Route path="/shop" element={<ShopPage products={db} />} />
        <Route
          path="/shop/:id"
          element={<ProductPage products={db} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
