import { Route, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import db from "./db";
import CartPage from "./pages/CartPage";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (product) => {
    let itemCartIndex = null;
    let copyCart = [...cart];
    let checkCart = cart.find((el, index) => {
      itemCartIndex = index;
      return el.id === product.id;
    });

    if (checkCart) {
      copyCart[itemCartIndex].count++;
    } else {
      product.count = 1;
      copyCart.push(product);
    }
    setCart(copyCart);
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
