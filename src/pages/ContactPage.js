import { useState } from "react";
import Header from "../component/Header";

function ContactPage() {
  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [isFinish, setIsFinish] = useState(false);

  const onInputHandelr = (e) => {
    let copyInputData = { ...inputData };
    copyInputData[e.target.name] = e.target.value;
    setInputData(copyInputData);
  };

  const resetState = () => {
    setInputData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (
      !inputData.fullName ||
      !inputData.email ||
      !inputData.message ||
      !inputData.subject
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setIsFinish(true);
      setTimeout(() => {
        setIsFinish(false);
        resetState();
      }, 2000);
    }
  };

  return (
    <>
      <Header title={"Contact us"} />
      <section className="contact container py-5">
        <div className="row">
          <div className="col-md-6">
            {isFinish ? (
              <div className="alert alert-success">
                <h3>Message is sent!</h3>
              </div>
            ) : (
              <form onSubmit={sendMessage}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full name"
                      className="form-control mb-3"
                      onInput={onInputHandelr}
                      value={inputData.fullName}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="form-control mb-3"
                      onInput={onInputHandelr}
                      value={inputData.email}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="form-control mb-3"
                  onInput={onInputHandelr}
                  value={inputData.subject}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  cols="30"
                  rows="10"
                  className="form-control mb-3"
                  onInput={onInputHandelr}
                  value={inputData.message}
                ></textarea>
                <div className="d-flex">
                  <button className="btn btn-primary py-2 me-3">
                    SEND MESSAGE
                  </button>
                  {!isValid && (
                    <div className="alert alert-danger py-2 mb-0 flex-grow-1">
                      All fields are required!
                    </div>
                  )}
                </div>
              </form>
            )}
          </div>

          <div className="contact-info col-md-6">
            <div className="box-address">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3>Our address</h3>
              <p>Street name 45/3,</p>
              <p>State, 12345</p>
            </div>
            <div className="box-email">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <a href="mailto:office@eshop.com">office@eshop.com</a>
            </div>
            <div className="box-phone">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3>Phone</h3>
              <a href="tel:+0123456778">+012 345 67 78</a>
              <a href="tel:+0123456778">+012 345 67 78</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
