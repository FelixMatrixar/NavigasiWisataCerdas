import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
const Contact = (props) => {

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
                                <h5 className="medium font__size--18 text__18-1024 color__green line__left mb-3 justify-content-center">Contact</h5>
                                <h1 className="semi-bdol font__size--48 text__48-1024 text__48-md text__48-sm">Contact information</h1>
                                <p className="normal font__size--16 text__16-1024 color__gray-2">Hey, Asep Asomething</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mb-4 mb-md-0">
                                <h3 className="semi-bold font__size--32">Contact information</h3>
                                <p className="normal font__size--16 text__16-1024 color__gray-2 mb-4">Fill up the form and our team will get back to you <br /> with in 24 hours.</p>

                                <div className="d-flex align-items-center mb-3">
                                    <img src="./../images/Notification - Bell.png" alt="" />
                                    <span className="medium font__size--16 text__16-1024 ml-2">+1 432 1234 234</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <img src="./../images/Notification - Bell (1).png" alt="" />
                                    <span className="medium font__size--16 text__16-1024 ml-2">hello@trav.id</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <img src="./../images/Notification - Bell (2).png" alt="" />
                                    <span className="medium font__size--16 text__16-1024 ml-2">105 Street, Seatle-US</span>
                                </div>
                            </div>
                            <div className="col-md-7">
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
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 color__black">Message the host (Optional)</label>
                                    <textarea className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field textarea" placeholder="Type here..." name="" id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className="text-right">
                                    <button className="medium font__size--16 text__16-1024 btn btn__blue shadow rounded__50 color__white">Send Message</button>
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

export default Contact;
