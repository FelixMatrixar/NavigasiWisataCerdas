import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../../component/Other/Footer";
import Navbar from "../../../component/Other/Navbar";
import SidebarSetting from "../../../component/Other/SidebarSetting";
const LoginSecurity = (props) => {

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
                                <h1 className="semi-bdol font__size--48 text__48-1024 text__48-md text__48-sm">Account</h1>
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
                                <h4 className="semi-bold font__size--24 text__24-1024 mb-5">Login & security</h4>

                                <div className="mb-5">
                                    <h5 className="semi-bold font__size--20 text__20-1024 mb-4">Login</h5>

                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h5 className="medium font__size--16 text__16-1024">Details</h5>
                                            <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">Last updated an hour ago</p>
                                        </div>

                                        <a href="#!" className="medium font__size--14 text__14-1024 btn ml-2 btn__outlined--blue color__blue no__opacity shadow rounded__50">Update</a>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <h5 className="semi-bold font__size--20 text__20-1024 mb-4">Social accounts</h5>

                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-start">
                                            <img src="./../images/facebook.png" alt="" />
                                            <div className="ml-3">
                                                <h5 className="medium font__size--16 text__16-1024">Facebook</h5>
                                                <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">Social accounts</p>
                                            </div>
                                        </div>

                                        <a href="#!" className="medium font__size--14 text__14-1024 btn ml-2 btn__outlined--red-2 color__red-2 no__opacity shadow rounded__50">Disconnect</a>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-start">
                                            <img src="./../images/fdfds.png" alt="" />
                                            <div className="ml-3">
                                                <h5 className="medium font__size--16 text__16-1024">Google</h5>
                                                <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">Not connected</p>
                                            </div>
                                        </div>

                                        <a href="#!" className="medium font__size--14 text__14-1024 btn ml-2 btn__outlined--blue color__blue no__opacity shadow rounded__50">Connects</a>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <h5 className="semi-bold font__size--20 text__20-1024 mb-4">Device history</h5>

                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-start">
                                            <img src="./../images/sdfgdfg.png" alt="" />
                                            <div className="ml-3">
                                                <h5 className="medium font__size--16 text__16-1024">Computer</h5>
                                                <a href="#!" className="medium font__size--16 text__16-1024 color__blue mb-3">Current Session</a>
                                                <p className="mb-0 normal font__size--16 text__16-1024">Jakarta · September 28, 2022 at 12:59</p>
                                            </div>
                                        </div>

                                        <a href="#!" className="medium font__size--14 text__14-1024 btn ml-2 btn__outlined--red-2 color__red-2 no__opacity shadow rounded__50">Log out device</a>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="semi-bold font__size--20 text__20-1024 mb-4">Account</h5>

                                    <div className="d-flex align-items-center justify-content-between">

                                        <h5 className="medium font__size--16 text__16-1024 mb-0">Deactivate your account</h5>

                                        <a href="#!" className="medium font__size--14 text__14-1024 btn ml-2 btn__outlined--red-2 color__red-2 no__opacity shadow rounded__50">Deactive</a>
                                    </div>
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

export default LoginSecurity;
