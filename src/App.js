import db from "./db";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [cart, setCart] = useState([
    {
      id: 15,
      title: "Eau De Perfume Spray",
      description:
        "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      price: 30,
      discountPercentage: 10.99,
      rating: 4.7,
      stock: 105,
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      thumbnail: "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/15/1.jpg",
        "https://dummyjson.com/image/i/products/15/2.jpg",
        "https://dummyjson.com/image/i/products/15/3.jpg",
        "https://dummyjson.com/image/i/products/15/4.jpg",
        "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
      ],
      count: 1,
    },
  ]);
  const redirect = useNavigate();

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

  const removeFromCart = (index) => {
    let tempCart = [...cart];
    if (tempCart[index].count < 2) {
      tempCart.splice(index, 1);
    } else {
      tempCart[index].count--;
    }

    tempCart.length === 0 && redirect("/shop");

    setCart(tempCart);
  };

  const clearCart = () => setCart([]);

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
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
