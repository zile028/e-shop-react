import React from "react";
import Header from "../component/Header";

function ContactPage() {
  return (
    <>
      <Header title={"Contact us"} />
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    className="form-control mb-3"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="form-control mb-3"
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="form-control mb-3"
              />
              <textarea
                name="message"
                placeholder="Message"
                cols="30"
                rows="10"
                className="form-control mb-3"
              ></textarea>
              <button className="btn btn-primary">SEND MESSAGE</button>
            </form>
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
