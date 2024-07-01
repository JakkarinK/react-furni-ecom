import React from "react";
import SofaFoot from "../assets/img/sofa-foot.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container ">
        <div className="subscribe">
          <div className="grid">
            <div className="row justify-content-between align-items-center">
              <div className="sub-img">
                <img src={SofaFoot} alt="" />
              </div>
              <div className="col-12 col-sm-8 col-lg-7 py-3">
                <div className="sub-form">
                  <div className="head d-flex align-items-center mb-1 gap-2">
                    <i className="fa-solid fa-envelope fs-3 text-black-50"></i>
                    <h5 className="m-0">Subscribe to Newsletter</h5>
                  </div>
                  <form>
                    <div className="grid">
                      <div className="row">
                        <div className="col-12 col-lg-4">
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-3"
                          />
                        </div>
                        <div className="col-12 col-lg-4">
                          <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="p-3"
                          />
                        </div>
                        <div className="col-12 col-lg-4 align-self-center">
                          <button type="submit" className="py-3 px-5">
                            <i className="fa-solid fa-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-nav">
          <div className="grid">
            <div className="row">
              <div className="col-12 col-lg-4 py-3">
                <div className="footer-topic">
                  <Link
                    to={"react-furni-ecom/"}
                    className="text-decoration-none"
                  >
                    <h3>Furni.</h3>
                  </Link>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.
                    Pellentesque habitant
                  </p>
                  <div className="footer-socials">
                    <Link to={"/"}>
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 py-3">
                <div className="footer-menu">
                  <div className="grid">
                    <div className="row">
                      <div className="col-6  col-lg-3">
                        <ul>
                          <li>
                            <Link to={"/"}>About us</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Services</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Blog</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Contact us</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6  col-lg-3">
                        <ul>
                          <li>
                            <Link to={"/"}>Support</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Knowledge base</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Live chat</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6  col-lg-3">
                        <ul>
                          <li>
                            <Link to={"/"}>Jobs</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Our team</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Leadership</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Privacy Policy</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6  col-lg-3">
                        <ul>
                          <li>
                            <Link to={"/"}>Nordic Chair</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Kruzo Aero</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Ergonomic Chair</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
