import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import Amount from "./Amount/Amount";
function CartProduct({ product, index }) {
  const dispatch = useDispatch();
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
          <p>
            <span>Quantity:</span>
            <Amount increment={-1} index={index} />
            <span>{product.count}</span>
            <Amount increment={1} index={index} />
          </p>
        </div>
        <div className="d-flex flex-column">
          <p className="h4 flex-grow-1 text-nowrap">
            Total: ${product.price * product.count}
          </p>
          <div className="text-end">
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(removeFromCart(index));
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
