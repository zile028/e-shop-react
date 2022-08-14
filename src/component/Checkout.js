import React, { useState } from "react";

function Checkout({ setShowCheckout }) {
  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
    cardNumber: "",
  });
  const onInputHandler = (e) => {
    let copyUserData = { ...userData };
    copyUserData[e.target.name] = e.target.value;
    setUserData(copyUserData);
  };

  const onButtonHandler = (e) => {
    switch (e.target.name) {
      case "pay":
        console.log("Pay");
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

        <button className="btn btn-info" name="pay" onClick={onButtonHandler}>
          Pay
        </button>
        <button
          className="btn btn-warning"
          name="cancel"
          onClick={onButtonHandler}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Checkout;
