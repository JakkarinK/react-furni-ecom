import React from "react";
import { Link } from "react-router-dom";
import Sofa from "../assets/img/sofa.png";
const Hero = ({children}) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col-lg-5 align-self-center py-5">
              <h1 className="text-white mb-4">{children}</h1>
              <p className="text-white mb-5 opacity-75">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <Link
                class="btn mx-2 px-5 py-3 bg-warning border border-2 border-warning rounded-pill"
                to="../react-furni-ecom/"
              >
                Shop Now
              </Link>
              <Link
                class="explore mx-2 px-5 py-3 btn bg-transparent text-white border border-white border-2 rounded-pill border-opacity-50"
                to="../react-furni-ecom/"
              >
                Explore
              </Link>
            </div>
            <div className="col-lg-7  align-self-center">
              <img className="sofa" src={Sofa} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
