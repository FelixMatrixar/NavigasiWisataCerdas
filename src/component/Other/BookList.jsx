import React, { Component } from "react";
import { Fragment } from "react";

const BookList = (props) => {
  return (
    <Fragment>
      <div className="row">
        <div className="my-lg-auto mb-3 col-lg-7">
          <div className="row">
            <div className="col-lg-5 mb-3 my-lg-auto">
              <div className="wrapper__title-book">
                <div className="icon flex-shrink-0">
                  <img src="./../images/airplane.png" alt="" />
                </div>
                <div className="about ml-3">
                  <h5 className="medium font__size--24 text__24-1024 mb-0">
                    Jakarta
                  </h5>
                  <p className="normal font__size--16 text__16-1024 color__gray-2 mb-0">
                    Soekarno Hatta Intl CGK
                  </p>
                  <p className="mb-0 medium font__size--20 text__20-1024">
                    06:35
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3 my-md-auto">
              <div className="wrapper__line-plane-book">
                <h5 className="text-center medium font__size--14 text__14-1024 color__gray-2">
                  Duration: <span className="color__black">55m</span>
                </h5>

                <img src="./../images/Progress.png" className="w-100" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3 my-md-auto">
              <h5 className="medium font__size--24 text__24-1024 mb-0">Bali</h5>
              <p className="normal font__size--16 text__16-1024 color__gray-2 mb-0">
                Ngurah Rai Intl (DPS)
              </p>
              <p className="mb-0 medium font__size--20 text__20-1024">07:30</p>
            </div>
          </div>
        </div>
        <div className="my-md-auto mb-3 col-md-5 col-lg-2">
          <h5 className="medium font__size--16 text__16-1024 mb-0">
            Feb 15, 2022
          </h5>
        </div>
        <div className="my-md-auto mb-3 col-md-7 col-lg-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img src="./../images/profile.png" alt="" />
              <h5 className="mb-0 medium font__size--16 text__16-1024 ml-1">
                2 Adult
              </h5>
            </div>

            <a
              href="#!"
              className="medium font__size--14 text__14-1024 btn btn__outlined--blue no__opacity color__blue shadow rounded__50 ml-3"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookList;
