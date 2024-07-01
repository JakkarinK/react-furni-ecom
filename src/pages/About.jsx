import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";

import CoverChoosUs from "../assets/img/cover1.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about-us-page">
      <Navbar />
      <Hero>About Us</Hero>
      <div className="why-choose-us">
        <div className="container">
          <div className="grid">
            <div className="row justify-content-between">
              <div className="col-lg-6 py-2">
                <div className="head mb-5">
                  <h2>Why Choose Us</h2>
                  <p className="text-muted">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                </div>
                <div className="grid">
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                      <i className="fa-solid fa-truck fs-3"></i>
                      <h6>Fast & Free Shipping</h6>
                      <p className="text-muted">
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate.
                      </p>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <i className="fa-solid fa-box fs-3"></i>
                      <h6>Easy to Shop</h6>
                      <p className="text-muted">
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate.
                      </p>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <i className="fa-solid fa-life-ring fs-3"></i>
                      <h6>24/7 Support</h6>
                      <p className="text-muted">
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate.
                      </p>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <i className="fa-solid fa-right-left fs-3"></i>
                      <h6>Hassle Free Returns</h6>
                      <p className="text-muted">
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 text-center mx-auto py-2">
                <div className="bg-img"></div>
                <img
                  className="cover rounded rounded-4 w-100"
                  src={CoverChoosUs}
                  alt="cover-choose-us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
