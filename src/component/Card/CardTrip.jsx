import React, { Component } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const CardTrip = (props) => {
  return (
    <Fragment>
      <NavLink
        to="/detail"
        className="wrapper__card-trip color__black d-inline-block w-100"
      >
        <img src={props.data.img} className="img" alt="" />
        <div className="desc">
          <div className="d-flex align-items-start justify-content-between">
            <div>
              <h5 className="medium font__size--20 text__20-1024 mb-0">
                {props.data.title}
              </h5>
              <p className="mb-0 normal font__size--16 text__16-1024 color__gray-3 mb-0">
                {props.data.location}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <img src="./../images/star.png" alt="" />
              <span className="medium font__size--16 text__16-1024 ml-2">
                {props.data.rating}
              </span>
            </div>
          </div>
          <hr />
          <div className="d-flex align-items-center justify-content-between">
            <span className="normal font__size--16 text__16-1024 color__gray-1">
              {props.data.date}
            </span>
            <span className="medium font__size--24 text__24-1024">
              Rp.{props.data.price}
              <span className="medium font__size--12">/Day</span>
            </span>
          </div>
        </div>
      </NavLink>
    </Fragment>
  );
};

export default CardTrip;
