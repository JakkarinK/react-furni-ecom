import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import ItemBox from "../components/ItemBox";
import C1 from "../assets/img/chair.png";
import C2 from "../assets/img/chair-2.png";
import C3 from "../assets/img/chair-3.png";

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
                  <div className="row">
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
    </div>
  );
};

export default Home;
