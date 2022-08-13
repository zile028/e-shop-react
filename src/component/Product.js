import React, { useState } from "react";
import { Link } from "react-router-dom";

function Product({ product, index, canDelete = false }) {
  const [currentProduct, setCurrentProduct] = useState(product);
  return (
    <div className="product-card">
      <img src={currentProduct.thumbnail} alt="" />
      <h4>{product.title}</h4>
      {canDelete ? (
        <div className="d-flex justify-content-between w-100 align-items-center">
          <span>
            {currentProduct.count} X ${currentProduct.price}
          </span>
          <button
            className="btn btn-danger"
            onClick={() => {
              setCurrentProduct({
                ...currentProduct,
                count: currentProduct.count - 1,
              });
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      ) : (
        <Link className="btn btn-info" to={"/shop/" + currentProduct.id}>
          Read more
        </Link>
      )}
    </div>
  );
}

export default Product;
