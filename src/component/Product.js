import React from "react";
import {Link} from "react-router-dom";

function Product({product}) {
	return (
	  <div className="product-card">
		  <img src={product.thumbnail} alt=""/>
		  <h4>{product.title}</h4>
		  <span>{product.category}</span>
		  <Link className="btn btn-info" to={"/shop/" + product.id}>
			  Read more
		  </Link>
	  </div>
	);
}

export default Product;
