import React, { Component, Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Login from './../Modal/Auth/Login'
import Register from './../Modal/Auth/Register';
import Confirm from './../Modal/Auth/Confirm';
import Code from "./../Modal/Auth/Code"

const Navbar = (props) => {

  const [modalLogin, setModalLogin] = useState(false);
  const onCLickModalLogin = () => {
    console.log(!modalLogin);
    if (!modalLogin) {
      console.log("add");
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalLogin(!modalLogin);
  };

  const [modalRegister, setModalRegister] = useState(false);
  const onCLickModalRegister = () => {
    if (!modalRegister) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalRegister(!modalRegister);
  };


  const [modalConfirm, setModalConfirm] = useState(false);
  const onCLickModalConfirm = () => {
    if (!modalConfirm) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalConfirm(!modalConfirm);
  };

  const [modalCode, setModalCode] = useState(false);
  const onCLickModalCode = () => {
    if (!modalCode) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalCode(!modalCode);
  };

  const onCLickSwitchModal = async (e) => {
    if (e == "login") {
      setModalRegister(!modalRegister);
      const timeout = await setTimeout(() => {
        setModalLogin(!modalLogin);
      }, 1000);
      return () => clearInterval(timeout);
    }
    if (e == "register") {
      setModalLogin(!modalLogin);
      const timeout = await setTimeout(() => {
        setModalRegister(!modalRegister);
      }, 1000);
      return () => clearInterval(timeout);
    }
    if (e == "confirm") {
      if (modalLogin) {
        setModalLogin(!modalLogin);
      }
      if (modalRegister) {
        setModalRegister(!modalRegister);
      }
      const timeout = await setTimeout(() => {
        setModalConfirm(!modalConfirm);
      }, 1000);
      return () => clearInterval(timeout);
    }

    if (e == "code") {
      setModalConfirm(!modalConfirm);
      const timeout = await setTimeout(() => {
        setModalCode(!modalCode);
      }, 1000);
      return () => clearInterval(timeout);
    }
  };



  const [toogleMenu, setToogleMenu] = useState(false)
  const [toogleLanguage, setToogleLanguage] = useState("English")

  const status = localStorage.getItem("status") == "login" ? true : false

  const onLogout = () => {
    localStorage.removeItem("status");
  }

  return (
    <Fragment>

      <Login
        modalLogin={modalLogin}
        onCLickModalLogin={() => onCLickModalLogin()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />
      <Register
        modalRegister={modalRegister}
        onCLickModalRegister={() => onCLickModalRegister()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />
      <Confirm
        modalConfirm={modalConfirm}
        onCLickModalConfirm={() => onCLickModalConfirm()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />
      <Code
        modalCode={modalCode}
        onCLickModalCode={() => onCLickModalCode()}
        onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
      />


      <div className={"wrapper__side-nav-mobile d-flex d-lg-none " + (toogleMenu ? "active" : "")}>
        <div className="d-flex flex-wrap w-100">
          <div className="w-100">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <NavLink
                to="/"
                exact
                class="navbar-brand medium font__size--20 text__20-1024 bold "
              >
                <div className="d-flex align-items-center font__size--18 text__18-1024 semi-bold color__white">
                  <img src="./../images/sdsadsa.png" alt="" />

                  <span className="ml-2">Trav.id</span>
                </div>
              </NavLink>
              <img src="./../images/close (1).png" onClick={() => setToogleMenu(!toogleMenu)} className="pointer" alt="" />
            </div>
            <div className="menu">
              <NavLink to="/" className="semi-bold font__size--16 text__16-1024 text__16-1024 color__white">Discover</NavLink>
              <hr />
              <NavLink to="/destination" className="semi-bold font__size--16 text__16-1024 text__16-1024 color__white">Destinations</NavLink>
              <hr />
              <NavLink
                to="/contact" className="semi-bold font__size--16 text__16-1024 text__16-1024 color__white">Contact</NavLink>
              <hr />
              <NavLink to="/faq" className="semi-bold font__size--16 text__16-1024 text__16-1024 color__white">FAQ</NavLink>
              <hr />
            </div>
          </div>
        </div>
      </div >
      <div className="bg__wrap-menu d-lg-none" onClick={() => setToogleMenu(!toogleMenu)}></div>
      <nav
        className="navbar navbar-expand-lg wrapper__navbar position-relative z-2"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="container position-relative">
          <div className="d-flex align-items-center">
            <div
              onClick={() => setToogleMenu(!toogleMenu)}
              class="nav__button d-lg-none position-relative mr-1 mr-sm-3 flex-shrink-0"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <NavLink
              to="/"
              exact
              class="navbar-brand font__size--18 text__18-1024 semi-bold  color__black"
            >
              <div className="d-flex align-items-center">
                <img src="./../images/radar.png" alt="" />

                <span className="ml-2">Trav.id</span>
              </div>
            </NavLink>
          </div>

          <div
            className="collapse navbar-collapse wrapper__navbar-menu ml-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu__center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  exact
                  class="nav-link medium font__size--16 text__16-1024 text__16-1024 color__gray-1"
                >
                  Discover
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/destination"
                  class="nav-link medium font__size--16 text__16-1024 text__16-1024 color__gray-1"
                >
                  Destinations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  class="nav-link medium font__size--16 text__16-1024 text__16-1024 color__gray-1"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/faq"
                  class="nav-link medium font__size--16 text__16-1024 text__16-1024 color__gray-1"
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>


          <div className="wrapper__side-menu d-flex align-items-center">
            <div class="dropdown show">
              <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="d-flex align-items-center">
                  <img src="./../images/global.png" alt="" />
                  <span className="medium font__size--16 text__16-1024 ml-2 color__gray-1 d-none d-sm-block">{toogleLanguage}</span>
                </div>
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" onClick={() => setToogleLanguage("English")} href="#!">English</a>
                <a class="dropdown-item" onClick={() => setToogleLanguage("Indonesia")} href="#!">Indonesia</a>
                <a class="dropdown-item" onClick={() => setToogleLanguage("Japan")} href="#!">Japan</a>
              </div>
            </div>
            <a href="#!" className="notification position-relative mx-3 mx-sm-4">
              <div className="circle normal font__size--14 color__white">5</div>
              <img src="./../images/sadfg (2).png" alt="" />
            </a>


            <div class="dropdown wrapper__dropdown">
              <div className="pointer" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="./../images/sadfg (3).png" className="images__avatar" alt="" />
              </div>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <NavLink to="/booking" class="dropdown-item" href="#">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src="./../images/sadfg (1).png" alt="" />
                      <span className="medium font__size--16 text__16-1024 ml-2">Booking</span>
                    </div>
                    <div className="wrapper__count normal font__size--14">
                      2
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/wishlist" class="dropdown-item" href="#">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src="./../images/sadfg (5).png" alt="" />
                      <span className="medium font__size--16 text__16-1024 ml-2">Wishlist</span>
                    </div>
                    <div className="wrapper__count normal font__size--14">
                      4
                    </div>
                  </div>
                </NavLink>
                <a class="dropdown-item" href="#">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src="./../images/sadfg (4).png" alt="" />
                      <span className="medium font__size--16 text__16-1024 ml-2">Message</span>
                    </div>
                    <div className="wrapper__count normal font__size--14">
                      6
                    </div>
                  </div>
                </a>
                <div className="hr__line">
                  <hr className="my-3" />
                </div>
                <a class="dropdown-item" href="#">
                  <div className="d-flex align-items-center">
                    <img src="./../images/Notification - Bell (3).png" alt="" />
                    <span className="medium font__size--16 text__16-1024 ml-2">Host your home</span>
                  </div>
                </a>
                <a class="dropdown-item" href="#">
                  <div className="d-flex align-items-center">
                    <img src="./../images/Notification - Bell (4).png" alt="" />
                    <span className="medium font__size--16 text__16-1024 ml-2">Host an experience</span>
                  </div>
                </a>
                <a class="dropdown-item" href="#">
                  <div className="d-flex align-items-center">
                    <img src="./../images/Notification - Bell (5).png" alt="" />
                    <span className="medium font__size--16 text__16-1024 ml-2">Help</span>
                  </div>
                </a>

                {
                  status ? <NavLink to="/profile/personal" className="profile-user color__black mt-4">
                    <div className="d-flex align-items-center mb-4">
                      <img src="./../images/sadfg (3).png" className="images__avatar" alt="" />
                      <div className="ml-2">
                        <h5 className="medium font__size--16 text__16-1024 mb-0">Asep Asomething</h5>
                        <p className="mb-0 normal font__size--14 color__gray-2">asepasomething@gmail.com</p>
                      </div>
                    </div>
                    <a href="#!" className="btn btn__outlined--blue shadow medium font__size--16 text__16-1024 color__blue no__opacity w-100 rounded__50" onClick={() => onLogout()}>Log Out</a>
                  </NavLink> : <div className="wrapper__auth-btn w-100 d-flex align-items-center">
                    <div className="items">
                      <a href="#!" className="btn btn__blue shadow medium font__size--14 color__white w-100 rounded__50" onClick={() => onCLickModalLogin()}>Log In</a>
                    </div>
                    <div className="items">
                      <a href="#!" className="btn btn__outlined--blue shadow medium font__size--14 color__blue no__opacity w-100 rounded__50" onClick={() => onCLickModalRegister()}>Sign Up</a>
                    </div>
                  </div>
                }

              </div>
            </div>
          </div>


        </div>
      </nav>
    </Fragment >
  );
};

export default Navbar;
