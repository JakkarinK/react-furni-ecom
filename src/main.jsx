import React from "react";
import ReactDOM from "react-dom/client";
import "./custom.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "react-furni-ecom/",
    element: <Home />,
  },
  {
    path: "react-furni-ecom/home",
    element: <Home />,
  },
  {
    path: "react-furni-ecom/shop",
    element: <Shop />,
  },
  {
    path: "react-furni-ecom/about",
    element: <About />,
  },
  {
    path: "react-furni-ecom/services",
    element: <Services />,
  },
  {
    path: "react-furni-ecom/blog",
    element: <Blog />,
  },
  {
    path: "react-furni-ecom/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
