import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ setShowCheckout, clearCart }) {
  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
    cardNumber: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [isFinish, setIsFinish] = useState(false);
  const redirect = useNavigate();

  const onInputHandler = (e) => {
    let copyUserData = { ...userData };
    copyUserData[e.target.name] = e.target.value;
    setUserData(copyUserData);
  };

  const validateData = () => {
    if (
      !userData.fullName ||
      !userData.phone ||
      !userData.address ||
      !userData.email ||
      !userData.cardNumber
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setIsFinish(true);
      setTimeout(() => {
        setShowCheckout(false);
        clearCart();
        redirect("/");
      }, 2000);
    }
  };

  const onButtonHandler = (e) => {
    switch (e.target.name) {
      case "pay":
        validateData();
        break;
      case "cancel":
        setShowCheckout(false);
        break;
      default:
        return;
    }
  };

  return (
    <div className="checkout-wraper">
      {isFinish ? (
        <div className="alert alert-success">Successfully!</div>
      ) : (
        <form>
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            className="form-control"
            onInput={onInputHandler}
            value={userData.fullName}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="form-control"
            onInput={onInputHandler}
            value={userData.phone}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            onInput={onInputHandler}
            value={userData.email}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            className="form-control"
            onInput={onInputHandler}
            value={userData.address}
          />

          <input
            type="text"
            name="cardNumber"
            placeholder="Card number"
            className="form-control"
            onInput={onInputHandler}
            value={userData.cardNumber}
          />

          <button
            type="button"
            className="btn btn-info"
            name="pay"
            onClick={onButtonHandler}
          >
            Pay
          </button>
          <button
            type="button"
            className="btn btn-warning"
            name="cancel"
            onClick={onButtonHandler}
          >
            Cancel
          </button>
          {!isValid ? (
            <p className="w-100 bg-danger bg-opacity-50 text-center rounded-2 py-2 m-0">
              All fields are required!
            </p>
          ) : null}
        </form>
      )}
    </div>
  );
}

export default Checkout;
