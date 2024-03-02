import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../../component/Other/Footer";
import Navbar from "../../../component/Other/Navbar";
import SidebarSetting from "../../../component/Other/SidebarSetting";
import ToogleCheck from "../../../component/Other/ToogleCheck";
const Privacy = (props) => {

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
                                <h1 className="semi-bodl font__size--48 text__48-1024 text__48-md text__48-sm">Account</h1>
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
                                <h4 className="semi-bold font__size--24 text__24-1024 mb-4">Activity sharing</h4>

                                <div className="mb-5">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="pr-3">
                                            <h5 className="semi-bold font__size--18 text__18-1024">Publish your saves to Facebook</h5>
                                            <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">Turning this on means your saves will automatically be published to Facebook.</p>
                                        </div>
                                        <ToogleCheck />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="pr-3">
                                            <h5 className="semi-bold font__size--18 text__18-1024">Include my profile and listing in search engines</h5>
                                            <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">Turning this on means search engines, like Google, will display your profile and listing pages in search results.</p>
                                        </div>
                                        <ToogleCheck status={true} />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="pr-3">
                                            <h5 className="semi-bold font__size--18 text__18-1024">Data sharing</h5>
                                            <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">Decide how your data is used for Trav.id research.</p>
                                        </div>
                                        <ToogleCheck status={true} />
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="semi-bold font__size--18 text__18-1024">Terms</h5>
                                        <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</p>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="semi-bold font__size--18 text__18-1024">Changes to the Service and/or Terms:</h5>
                                        <p className="normal font__size--16 text__16-1024 color__gray-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</p>
                                        <p className="normal font__size--16 text__16-1024 color__gray-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</p>
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

export default Privacy;
