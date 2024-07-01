import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";

import B1 from "../assets/img/blog/post-1.jpg";
import B2 from "../assets/img/blog/post-2.jpg";
import B3 from "../assets/img/blog/post-3.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="blog-page">
      <Navbar />
      <Hero>Blog</Hero>
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="blog-item">
                <Link to={"#"}>
                  <img className="card-img-top rounded rounded-4" src={B1} />
                </Link>
                <div className="card-body text-muted px-3">
                  <h5 className="card-title mt-2">
                    <Link className="text-black text-decoration-none" to={"#"}>
                      First Time Home Owner Ideas
                    </Link>
                  </h5>
                  <p className="card-text mt-2">
                    by{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Kristin Watson
                    </Link>{" "}
                    on{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Dec 19, 2021
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="blog-item">
                <Link to={"#"}>
                  <img className="card-img-top rounded rounded-4" src={B2} />
                </Link>
                <div className="card-body text-muted px-3">
                  <h5 className="card-title mt-2">
                    <Link className="text-black text-decoration-none" to={"#"}>
                      How To Keep Your Furniture Clean
                    </Link>
                  </h5>
                  <p className="card-text mt-2">
                    by{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Robert Fox
                    </Link>{" "}
                    on{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Dec 15, 2021
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="blog-item">
                <Link to={"#"}>
                  <img className="card-img-top rounded rounded-4" src={B3} />
                </Link>
                <div className="card-body text-muted px-3">
                  <h5 className="card-title mt-2">
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Small Space Furniture Apartment Ideas
                    </Link>
                  </h5>
                  <p className="card-text mt-2">
                    by{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Kristin Watson
                    </Link>{" "}
                    on{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Dec 12, 2021
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="blog-item">
                <Link to={"#"}>
                  <img className="card-img-top rounded rounded-4" src={B1} />
                </Link>
                <div className="card-body text-muted px-3">
                  <h5 className="card-title mt-2">
                    <Link className="text-black text-decoration-none" to={"#"}>
                      First Time Home Owner Ideas
                    </Link>
                  </h5>
                  <p className="card-text mt-2">
                    by{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Kristin Watson
                    </Link>{" "}
                    on{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Dec 19, 2021
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="blog-item">
                <Link to={"#"}>
                  <img className="card-img-top rounded rounded-4" src={B2} />
                </Link>
                <div className="card-body text-muted px-3">
                  <h5 className="card-title mt-2">
                    <Link className="text-black text-decoration-none" to={"#"}>
                      How To Keep Your Furniture Clean
                    </Link>
                  </h5>
                  <p className="card-text mt-2">
                    by{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Robert Fox
                    </Link>{" "}
                    on{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Dec 15, 2021
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="blog-item">
                <Link to={"#"}>
                  <img className="card-img-top rounded rounded-4" src={B3} />
                </Link>
                <div className="card-body text-muted px-3">
                  <h5 className="card-title mt-2">
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Small Space Furniture Apartment Ideas
                    </Link>
                  </h5>
                  <p className="card-text mt-2">
                    by{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Kristin Watson
                    </Link>{" "}
                    on{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Dec 12, 2021
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="blog-item">
                <Link to={"#"}>
                  <img className="card-img-top rounded rounded-4" src={B1} />
                </Link>
                <div className="card-body text-muted px-3">
                  <h5 className="card-title mt-2">
                    <Link className="text-black text-decoration-none" to={"#"}>
                      First Time Home Owner Ideas
                    </Link>
                  </h5>
                  <p className="card-text mt-2">
                    by{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Kristin Watson
                    </Link>{" "}
                    on{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Dec 19, 2021
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="blog-item">
                <Link to={"#"}>
                  <img className="card-img-top rounded rounded-4" src={B2} />
                </Link>
                <div className="card-body text-muted px-3">
                  <h5 className="card-title mt-2">
                    <Link className="text-black text-decoration-none" to={"#"}>
                      How To Keep Your Furniture Clean
                    </Link>
                  </h5>
                  <p className="card-text mt-2">
                    by{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Robert Fox
                    </Link>{" "}
                    on{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Dec 15, 2021
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="blog-item">
                <Link to={"#"}>
                  <img className="card-img-top rounded rounded-4" src={B3} />
                </Link>
                <div className="card-body text-muted px-3">
                  <h5 className="card-title mt-2">
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Small Space Furniture Apartment Ideas
                    </Link>
                  </h5>
                  <p className="card-text mt-2">
                    by{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Kristin Watson
                    </Link>{" "}
                    on{" "}
                    <Link className="text-black text-decoration-none" to={"#"}>
                      Dec 12, 2021
                    </Link>
                  </p>
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

export default Blog;
