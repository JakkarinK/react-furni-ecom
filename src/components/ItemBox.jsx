import React from "react";
import Cross from "../assets/img/cross.svg";
import { Link } from "react-router-dom";

const ItemBox = ({ img, name, price }) => {
  return (
    <>
      <div className="item-box">
        <Link to={"#"} className="text-decoration-none text-black">
          <div className="item-img pt-3">
            <img src={img} alt="" />
          </div>
          <div className="detail text-center py-2">
            <h6 className="">{name}</h6>
            <span className="fw-bold">${price}</span>
          </div>
          <div className="icon-hover pb-1 d-flex justify-content-center align-items-center ">
            <img className="bg-dark p-2 rounded-circle" src={Cross} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ItemBox;
