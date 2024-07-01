import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import ItemBox from "../components/ItemBox";
import C1 from "../assets/img/chair.png";
import C2 from "../assets/img/chair-2.png";
import C3 from "../assets/img/chair-3.png";

import G1 from "../assets/img/homepage/img-grid-1.jpg";
import G2 from "../assets/img/homepage/img-grid-2.jpg";
import G3 from "../assets/img/homepage/img-grid-3.jpg";

import CoverChoosUs from "../assets/img/cover1.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero>Modern Interior Design Studio</Hero>

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
                  className="cover rounded rounded-4"
                  src={CoverChoosUs}
                  alt="cover-choose-us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="make-modern-design">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-lg-7">
                <div className="img-grid">
                  <img className="g1" src={G1} alt="img-grid-1" />
                  <img className="g2" src={G2} alt="img-grid-2" />
                  <img className="g3" src={G3} alt="img-grid-3" />
                </div>
              </div>
              <div className="detail col-lg-5 px-4">
                <h2>We Help You Make Modern Interior Design</h2>
                <p className="text-muted mt-4">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada
                </p>
                <ul className="list-unstyled text-muted mt-4">
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
