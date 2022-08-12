import { Route, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import db from "./db";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage products={db} />} />
        <Route path="/shop" element={<ShopPage products={db} />} />
        <Route path="/shop/:id" element={<ProductPage products={db} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
