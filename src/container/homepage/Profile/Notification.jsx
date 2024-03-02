import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../../component/Other/Footer";
import Navbar from "../../../component/Other/Navbar";
import SidebarSetting from "../../../component/Other/SidebarSetting";
import ToogleCheck from "../../../component/Other/ToogleCheck";
const Notification = (props) => {

    return (
        <Fragment>
            <div className="overflow-hidden">
                <Navbar />

                <section>
                    <div className="container">
                        <div className="wrapper__head-top position-relative">
                            <img src="./../images/Group 82.png" className="images__1" alt="" />
                            <img src="./../images/Frame 889.png" className="images__2" alt="" />
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
                                <h4 className="semi-bold font__size--24 text__24-1024 mb-4">Travel tips and offers</h4>

                                <div className="mb-5">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="mr-3">
                                            <h5 className="semi-bold font__size--18 text__18-1024">Inspiration and offers</h5>
                                            <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">On: Email</p>
                                        </div>
                                        <ToogleCheck status={true} />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="mr-3">
                                            <h5 className="semi-bold font__size--18 text__18-1024">Trip planning</h5>
                                            <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">On: Email</p>
                                        </div>
                                        <ToogleCheck status={true} />
                                    </div>
                                </div>


                                <h4 className="semi-bold font__size--24 text__24-1024 mb-4">Travel.id updates</h4>

                                <div className="mb-5">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="mr-3">
                                            <h5 className="semi-bold font__size--18 text__18-1024">News and programs</h5>
                                            <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">On: Email</p>
                                        </div>
                                        <ToogleCheck />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="mr-3">
                                            <h5 className="semi-bold font__size--18 text__18-1024">News and programs</h5>
                                            <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">On: Email</p>
                                        </div>
                                        <ToogleCheck />
                                    </div>
                                </div>


                                <h4 className="semi-bold font__size--24 text__24-1024 mb-4">Account activity and policies</h4>

                                <div className="mb-5">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="mr-3">
                                            <h5 className="semi-bold font__size--18 text__18-1024">Account activity</h5>
                                            <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">On: Email and SMS</p>
                                        </div>
                                        <ToogleCheck status={true} />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="mr-3">
                                            <h5 className="semi-bold font__size--18 text__18-1024">Account activity</h5>
                                            <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">On: Email and SMS</p>
                                        </div>
                                        <ToogleCheck />
                                    </div>
                                </div>


                                <h4 className="semi-bold font__size--24 text__24-1024 mb-4">Reminders</h4>

                                <div className="mb-5">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="mr-3">
                                            <h5 className="semi-bold font__size--18 text__18-1024">Reminders</h5>
                                            <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">On: Email and SMS</p>
                                        </div>
                                        <ToogleCheck status={true} />
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

export default Notification;
