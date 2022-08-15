import React from "react";
import { Link } from "react-router-dom";

function CartProduct({ product, removeFromCart, index }) {
  return (
    <>
      <div className="cart-product d-flex w-100 border-bottom py-2">
        <div className="">
          <img src={product.thumbnail} alt="" />
        </div>
        <div className="ms-md-2 flex-grow-1">
          <h3>{product.title}</h3>
          <p>Brand: {product.brand}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.count}</p>
        </div>
        <div className="d-flex flex-column">
          <p className="h4 flex-grow-1 text-nowrap">
            Total: ${product.price * product.count}
          </p>
          <div className="text-end">
            <button
              className="btn btn-danger"
              onClick={() => {
                removeFromCart(index);
              }}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
