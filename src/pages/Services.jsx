import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import ItemBox from "../components/ItemBox";

import C1 from "../assets/img/chair.png";
import C2 from "../assets/img/chair-2.png";
import C3 from "../assets/img/chair-3.png";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="services-page">
      <Navbar />
      <Hero>Services</Hero>
      <div className="service">
        <div className="container gap-4">
          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <i className="fa-solid fa-truck fs-3"></i>
              <h6>Fast & Free Shipping</h6>
              <p className="text-muted">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <i className="fa-solid fa-box fs-3"></i>
              <h6>Easy to Shop</h6>
              <p className="text-muted">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <i className="fa-solid fa-life-ring fs-3"></i>
              <h6>24/7 Support</h6>
              <p className="text-muted">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <i className="fa-solid fa-right-left fs-3"></i>
              <h6>Hassle Free Returns</h6>
              <p className="text-muted">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <i className="fa-solid fa-truck fs-3"></i>
              <h6>Fast & Free Shipping</h6>
              <p className="text-muted">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <i className="fa-solid fa-box fs-3"></i>
              <h6>Easy to Shop</h6>
              <p className="text-muted">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <i className="fa-solid fa-life-ring fs-3"></i>
              <h6>24/7 Support</h6>
              <p className="text-muted">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <i className="fa-solid fa-right-left fs-3"></i>
              <h6>Hassle Free Returns</h6>
              <p className="text-muted">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ex-product">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-lg-3 col-md-12 py-3">
                <div className="">
                  <h2>Crafted with excellent material.</h2>
                  <p className="text-muted">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                  <button className="btn btn-dark border rounded-pill py-3 px-5">
                    Explore
                  </button>
                </div>
              </div>
              <div className="col-lg-9 py-3">
                <div className="grid">
                  <div className="row py-5">
                    <div className="col-sm-4 col-12 ">
                      <ItemBox img={C1} name={"Nordic Chair"} price={"50.00"} />
                    </div>
                    <div className="col-sm-4 col-12">
                      <ItemBox
                        img={C2}
                        name={"Kruzo Aero Chair"}
                        price={"78.00"}
                      />
                    </div>
                    <div className="col-sm-4 col-12">
                      <ItemBox
                        img={C3}
                        name={"Ergonomic Chair"}
                        price={"43.00"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
