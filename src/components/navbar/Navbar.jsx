import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let activeClassName = "nav-link nav-active";
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand text-white fs-1" href="/">
          Furni.
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarHead"
          aria-controls="navbarHead"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse gap-5" id="navbarHead">
          <ul className="menu-bar navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-link"
                }
                to="../react-furni-ecom/"
                caseSensitive
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-link"
                }
                to="../react-furni-ecom/shop"
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-link"
                }
                to="../react-furni-ecom/about"
              >
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-link"
                }
                to="../react-furni-ecom/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-link"
                }
                to="../react-furni-ecom/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-link"
                }
                to="../react-furni-ecom/contact"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <Link className="nav-link text-white" to="../react-furni-ecom/">
              <i class="fa-solid fa-user fs-4 p-2"></i>
            </Link>

            <Link className="nav-link text-white" to="../react-furni-ecom/cart">
              <i class="fa-solid fa-cart-shopping fs-4 p-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
