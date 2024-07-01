import React from "react";
import Navbar from "../components/navbar/Navbar";
import ItemBox from "../components/ItemBox";
import C1 from "../assets/img/chair.png";
import C2 from "../assets/img/chair-2.png";
import C3 from "../assets/img/chair-3.png";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <div className="shop-page">
      <Navbar />
      <div className="hero py-5">
        <div className="container">
          <h1 className="text-white mb-4">Shop</h1>
        </div>
      </div>
      <div className="product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-lg-3">
              <ItemBox img={C1} name={"Nordic Chair"} price={"50.00"} />
            </div>
            <div className="col-12 col-sm-4 col-lg-3">
              <ItemBox img={C2} name={"Kruzo Aero Chair"} price={"78.00"} />
            </div>
            <div className="col-12 col-sm-4 col-lg-3">
              <ItemBox img={C3} name={"Ergonomic Chair"} price={"43.00"} />
            </div>
            <div className="col-12 col-sm-4 col-lg-3">
              <ItemBox img={C1} name={"Nordic Chair"} price={"50.00"} />
            </div>
            <div className="col-12 col-sm-4 col-lg-3">
              <ItemBox img={C2} name={"Kruzo Aero Chair"} price={"78.00"} />
            </div>
            <div className="col-12 col-sm-4 col-lg-3">
              <ItemBox img={C3} name={"Ergonomic Chair"} price={"43.00"} />
            </div>
            <div className="col-12 col-sm-4 col-lg-3">
              <ItemBox img={C1} name={"Nordic Chair"} price={"50.00"} />
            </div>
            <div className="col-12 col-sm-4 col-lg-3">
              <ItemBox img={C2} name={"Kruzo Aero Chair"} price={"78.00"} />
            </div>
            <div className="col-12 col-sm-4 col-lg-3">
              <ItemBox img={C3} name={"Ergonomic Chair"} price={"43.00"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
