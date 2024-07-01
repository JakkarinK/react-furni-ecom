import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact-us-page">
      <Navbar />
      <Hero>Contact</Hero>
      <div className="contact">
        <div className="container">
          <div className="col-12 col-lg-8 mx-auto">
            <div className="grid">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="detail">
                    <i className="i-custom fa-solid fa-location-dot"></i>
                    <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="detail">
                    <i className="i-custom fa-solid fa-envelope"></i>
                    <p>info@yourdomain.com</p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="detail">
                    <i className="i-custom fa-solid fa-phone"></i>
                    <p>+1 294 3925 3939</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="my-5">
              <div className="grid">
                <div className="row">
                  <div className="item col-6">
                    <label htmlFor="fn">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fn"
                      name="fn"
                    />
                  </div>
                  <div className="item col-6">
                    <label htmlFor="ln">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ln"
                      name="ln"
                    />
                  </div>
                </div>
                <div className="item">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="item">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={5}
                  />
                </div>
                <div className="item mt-5">
                  <button
                    type="submit"
                    className="btn btn-dark px-5 py-3 rounded rounded-5"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
