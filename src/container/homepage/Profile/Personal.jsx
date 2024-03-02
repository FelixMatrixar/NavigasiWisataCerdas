import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../../component/Other/Footer";
import Navbar from "../../../component/Other/Navbar";
import SidebarSetting from "../../../component/Other/SidebarSetting";
const Personal = (props) => {

    return (
        <Fragment>
            <div className="overflow-hidden">
                <Navbar />

                <section>
                    <div className="container">
                        <div className="wrapper__head-top position-relative">
                            <img src="./../images/Group 82.png" className="images__1 d-none d-md-block" alt="" />
                            <img src="./../images/Frame 889.png" className="images__2 d-none d-md-block" alt="" />
                            <div className="text-center position-relative z-2">
                                <h5 className="medium font__size--18 text__18-1024 color__green line__left mb-3 justify-content-center">Profile</h5>
                                <h1 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm">Account</h1>
                                <p className="normal font__size--16 text__16-1024 color__gray-2">Hey, Asep Asomething</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mb-4 mb-md-0">
                                <h3 className="semi-bold font__size--32 text__32-1024">Profil setting</h3>
                                <p className="normal font__size--16 text__16-1024 color__gray-2 mb-4">Welcome to your new travel account. We've used <br className="d-none d-lg-block" /> your email address and password to set up your <br className="d-none d-lg-block" /> account. </p>
                                
                                <SidebarSetting />


                            </div>
                            <div className="col-md-7">
                                <h4 className="semi-bold font__size--24 text__24-1024 mb-4">Personal info</h4>
                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 color__black">First Name</label>
                                    <input type="text" className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="Your First Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 color__black">Last Name</label>
                                    <input type="text" className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="Your Last Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 color__black">Email</label>
                                    <input type="text" className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 color__black">Phone</label>
                                    <input type="text" className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="Your Phone" />
                                </div>
                                <div className="form-group mb-5">
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 color__black">Address</label>
                                    <input type="text" className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="Your Address" />
                                </div>
                                <div className="text-right">
                                    <button className="medium font__size--16 text__16-1024 btn btn__blue shadow rounded__50 color__white">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div >
        </Fragment >
    );
};

export default Personal;
