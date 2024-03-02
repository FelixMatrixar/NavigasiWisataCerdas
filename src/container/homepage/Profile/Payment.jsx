import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../../component/Other/Footer";
import Navbar from "../../../component/Other/Navbar";
import SidebarSetting from "../../../component/Other/SidebarSetting";
const Payment = (props) => {

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
                                <h4 className="semi-bold font__size--24 text__24-1024 mb-5">Payment Method</h4>

                                <div className="mb-5">
                                    <h5 className="semi-bold font__size--20 text__20-1024 mb-4">Credit card</h5>

                                    <div className="wrapper__select-pay position-relative mb-4">
                                        <input type="radio" name="credit" value="paypal" className="" />
                                        <div className="wrap">
                                            <div className="radio"></div>
                                            <div className="ml-3 d-flex align-items-center">
                                                <img src="./../images/Mastercard.png" className="mr-2" alt="" />
                                                <h5 className="mb-0 medium font__size--16 text__16-1024">•••• •••• •••• 87652</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="wrapper__select-pay position-relative">
                                        <input type="radio" name="credit" value="applepay" className="" />
                                        <div className="wrap">
                                            <div className="radio"></div>
                                            <div className="ml-3 d-flex align-items-center">
                                                <img src="./../images/VisaDebit.png" className="mr-2" alt="" />
                                                <h5 className="mb-0 medium font__size--16 text__16-1024">•••• •••• •••• 87652</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <h5 className="semi-bold font__size--20 text__20-1024 mb-4">E-wallet</h5>

                                    <div className="wrapper__select-pay position-relative mb-4">
                                        <input type="radio" name="payment" value="paypal" className="" />
                                        <div className="wrap">
                                            <div className="radio"></div>
                                            <img src="./../images/Frame 162682.png" className="ml-3" alt="" />
                                        </div>
                                    </div>

                                    <div className="wrapper__select-pay position-relative">
                                        <input type="radio" name="payment" value="applepay" className="" />
                                        <div className="wrap">
                                            <div className="radio"></div>
                                            <img src="./../images/ApplePay.png" className="ml-3" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <button className="medium font__size--16 text__16-1024 btn btn__blue shadow rounded__50 color__white">Edit</button>
                                </div>

                                <div className="mt-5">
                                    <h5 className="semi-bold font__size--20 text__20-1024">Coupons</h5>
                                    <p className="normal font__size--16 text__16-1024 color__gray-2 mb-0">Add a coupon and save on your next trip.</p>

                                    <div className="wrapper__field-subscibe my-4">
                                        <input type="text" placeholder='Enter discound code' className='normal font__size--14 color__gray-2 w-100' />
                                        <div className="send ml-2">
                                            <img src="./../images/Line.png" alt="" />
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className="mb-0 medium font__size--16 text__16-1024 color__gray-2">Your coupons</h5>
                                        <h5 className="mb-0 medium font__size--16 text__16-1024">5</h5>
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

export default Payment;
