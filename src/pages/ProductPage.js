import React, { useEffect, useRef, useState } from "react";
import Header from "../component/Header";
import { useParams } from "react-router-dom";

function ProductPage({ products }) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const thumbnail = useRef();

  useEffect(() => {
    let founded = products.find((el) => el.id === parseInt(id));
    setProduct(founded);
  }, []);

  const galleryLayout = () =>
    product.images.map((el, index) => (
      <div className="product-image" key={index}>
        <img src={el} alt={product.title} onClick={changeThumbnail} />
      </div>
    ));

  const changeThumbnail = (e) => {
    console.log(e.target.src);
    thumbnail.current.src = e.target.src;
  };

  return (
    <>
      <Header title={product.title} />
      <section className="single-product container py-5">
        <div className="row align-items-start">
          <div className="col me-2">
            <img ref={thumbnail} src={product.thumbnail} alt="" />
            <div>{product.id && galleryLayout()}</div>
          </div>
          <div className="col-md-5">
            <h3>{product.title}</h3>
            <table className="table fw-bold">
              <tbody>
                <tr>
                  <td>Price:</td>
                  <td>{product.price}</td>
                </tr>

                <tr>
                  <td>Category:</td>
                  <td>{product.category}</td>
                </tr>

                <tr>
                  <td>Brand:</td>
                  <td>{product.brand}</td>
                </tr>

                <tr>
                  <td>Rating:</td>
                  <td>{product.rating}</td>
                </tr>
              </tbody>
            </table>
            <p>{product.description}</p>
            <button className="btn btn-danger w-100">Add to cart</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
