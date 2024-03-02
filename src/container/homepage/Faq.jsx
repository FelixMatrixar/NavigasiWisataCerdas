import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import AccordionFAQ from "../../component/Other/AccordionFAQ";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
const Faq = (props) => {
    const accordions = [
        {
            title: "How does your company work?",
            desc: "Trav.id is a community based on connection and belonging. We take the safety of our Hosts and guests very seriously—Hosts must meet and maintain quality standards, and all personal profiles and listings are verified. We work to keep everyone safe on our site and app with encrypted personal data and a trusted payment system. Plus, we have a 24/7 community support team ready to answer any of your questions."
        },
        {
            title: "Getting started on Airbnb",
            desc: "Trav.id is a community based on connection and belonging. We take the safety of our Hosts and guests very seriously—Hosts must meet and maintain quality standards, and all personal profiles and listings are verified. We work to keep everyone safe on our site and app with encrypted personal data and a trusted payment system. Plus, we have a 24/7 community support team ready to answer any of your questions."
        },
        {
            title: "How to book an emergency stay through Trav.id",
            desc: "Trav.id is a community based on connection and belonging. We take the safety of our Hosts and guests very seriously—Hosts must meet and maintain quality standards, and all personal profiles and listings are verified. We work to keep everyone safe on our site and app with encrypted personal data and a trusted payment system. Plus, we have a 24/7 community support team ready to answer any of your questions."
        },
        {
            title: "How to getting protected through TravCover",
            desc: "Trav.id is a community based on connection and belonging. We take the safety of our Hosts and guests very seriously—Hosts must meet and maintain quality standards, and all personal profiles and listings are verified. We work to keep everyone safe on our site and app with encrypted personal data and a trusted payment system. Plus, we have a 24/7 community support team ready to answer any of your questions."
        },
        {
            title: "How to paying and communicating through Trav.id",
            desc: "Trav.id is a community based on connection and belonging. We take the safety of our Hosts and guests very seriously—Hosts must meet and maintain quality standards, and all personal profiles and listings are verified. We work to keep everyone safe on our site and app with encrypted personal data and a trusted payment system. Plus, we have a 24/7 community support team ready to answer any of your questions."
        },
        {
            title: "How to Canceling your reservation for a stay",
            desc: "Trav.id is a community based on connection and belonging. We take the safety of our Hosts and guests very seriously—Hosts must meet and maintain quality standards, and all personal profiles and listings are verified. We work to keep everyone safe on our site and app with encrypted personal data and a trusted payment system. Plus, we have a 24/7 community support team ready to answer any of your questions."
        },
        {
            title: "When you’ll pay for your reservation",
            desc: "Trav.id is a community based on connection and belonging. We take the safety of our Hosts and guests very seriously—Hosts must meet and maintain quality standards, and all personal profiles and listings are verified. We work to keep everyone safe on our site and app with encrypted personal data and a trusted payment system. Plus, we have a 24/7 community support team ready to answer any of your questions."
        },
        {
            title: "How do I report a message or block someone on Trav.id?",
            desc: "Trav.id is a community based on connection and belonging. We take the safety of our Hosts and guests very seriously—Hosts must meet and maintain quality standards, and all personal profiles and listings are verified. We work to keep everyone safe on our site and app with encrypted personal data and a trusted payment system. Plus, we have a 24/7 community support team ready to answer any of your questions."
        },
        {
            title: "How Trav.id builds trust between Hosts and guests",
            desc: "Trav.id is a community based on connection and belonging. We take the safety of our Hosts and guests very seriously—Hosts must meet and maintain quality standards, and all personal profiles and listings are verified. We work to keep everyone safe on our site and app with encrypted personal data and a trusted payment system. Plus, we have a 24/7 community support team ready to answer any of your questions."
        },
        {
            title: "How the Resolution Center helps you",
            desc: "Trav.id is a community based on connection and belonging. We take the safety of our Hosts and guests very seriously—Hosts must meet and maintain quality standards, and all personal profiles and listings are verified. We work to keep everyone safe on our site and app with encrypted personal data and a trusted payment system. Plus, we have a 24/7 community support team ready to answer any of your questions."
        },
    ]
    return (
        <Fragment>
            <div className="overflow-hidden">
                <Navbar />

                <section>
                    <div className="container">
                        <div className="wrapper__head-top position-relative">
                            <img src="./../images/Group 82.png" className="images__1 d-none d-xl-block" alt="" />
                            <img src="./../images/Frame 889.png" className="images__2 d-none d-xl-block" alt="" />
                            <div className="text-center position-relative z-2">
                                <h5 className="medium font__size--18 text__18-1024 color__green line__left mb-3 justify-content-center">FAQs</h5>
                                <h1 className="semi-bdol font__size--48 text__48-1024 text__48-md text__48-sm">Hi, How can we help you?</h1>
                                <p className="normal font__size--16 text__16-1024 color__gray-2 mb-4">Browse information about how to use our website, and share your feedback with us. Frequently  <br className="d-none d-md-block" />asked questions about travel can be found here.</p>

                                <div className="d-flex flex-wrap flex-sm-nowrap justify-content-center align-items-center">
                                    <input type="text" placeholder="Search anything" className="normal font__size--16 text__16-1024 color__gray-2 wrapper__field-input" />

                                    <a href="#!" className="btn btn__blue shadow color__white rounded__50 medium font__size--16 text__16-1024 ml-sm-3 mt-3 mt-sm-0">
                                        <div className="d-flex align-items-center">
                                            <img src="./../images/dssdsad.png" alt="" />
                                            <span className="ml-2">Search</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-0">
                    <div className="container">
                        <ul class="nav nav-pills wrapper__nav-travel mb-5" id="pills-tab" role="tablist">
                            <li class="nav-item mb-3 mb-md-0">
                                <a class="nav-link medium font__size--14 text__14-1024 color__gray-2 active" id="pills-General-tab" data-toggle="pill" href="#pills-General" role="tab" aria-controls="pills-General" aria-selected="true">
                                    <div className="d-flex align-items-center svg">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 13.125C8.275 13.125 6.875 11.725 6.875 10C6.875 8.275 8.275 6.875 10 6.875C11.725 6.875 13.125 8.275 13.125 10C13.125 11.725 11.725 13.125 10 13.125ZM10 8.125C8.96667 8.125 8.125 8.96667 8.125 10C8.125 11.0333 8.96667 11.875 10 11.875C11.0333 11.875 11.875 11.0333 11.875 10C11.875 8.96667 11.0333 8.125 10 8.125Z" fill="#7D7C84" />
                                            <path d="M12.675 18.4917C12.5 18.4917 12.325 18.4667 12.15 18.4251C11.6333 18.2834 11.2 17.9584 10.925 17.5001L10.825 17.3334C10.3333 16.4834 9.65832 16.4834 9.16666 17.3334L9.07499 17.4917C8.79999 17.9584 8.36666 18.2917 7.84999 18.4251C7.32499 18.5667 6.78332 18.4917 6.32499 18.2167L4.89166 17.3917C4.38332 17.1001 4.01666 16.6251 3.85832 16.0501C3.70832 15.4751 3.78332 14.8834 4.07499 14.3751C4.31666 13.9501 4.38332 13.5667 4.24166 13.3251C4.09999 13.0834 3.74166 12.9417 3.24999 12.9417C2.03332 12.9417 1.04166 11.9501 1.04166 10.7334V9.26674C1.04166 8.05008 2.03332 7.05841 3.24999 7.05841C3.74166 7.05841 4.09999 6.91674 4.24166 6.67508C4.38332 6.43341 4.32499 6.05008 4.07499 5.62508C3.78332 5.11674 3.70832 4.51674 3.85832 3.95008C4.00832 3.37508 4.37499 2.90008 4.89166 2.60841L6.33332 1.78341C7.27499 1.22508 8.51666 1.55008 9.08332 2.50841L9.18332 2.67508C9.67499 3.52508 10.35 3.52508 10.8417 2.67508L10.9333 2.51674C11.5 1.55008 12.7417 1.22508 13.6917 1.79174L15.125 2.61674C15.6333 2.90841 16 3.38341 16.1583 3.95841C16.3083 4.53341 16.2333 5.12508 15.9417 5.63341C15.7 6.05841 15.6333 6.44174 15.775 6.68341C15.9167 6.92508 16.275 7.06674 16.7667 7.06674C17.9833 7.06674 18.975 8.05841 18.975 9.27508V10.7417C18.975 11.9584 17.9833 12.9501 16.7667 12.9501C16.275 12.9501 15.9167 13.0917 15.775 13.3334C15.6333 13.5751 15.6917 13.9584 15.9417 14.3834C16.2333 14.8917 16.3167 15.4917 16.1583 16.0584C16.0083 16.6334 15.6417 17.1084 15.125 17.4001L13.6833 18.2251C13.3667 18.4001 13.025 18.4917 12.675 18.4917ZM9.99999 15.4084C10.7417 15.4084 11.4333 15.8751 11.9083 16.7001L12 16.8584C12.1 17.0334 12.2667 17.1584 12.4667 17.2084C12.6667 17.2584 12.8667 17.2334 13.0333 17.1334L14.475 16.3001C14.6917 16.1751 14.8583 15.9667 14.925 15.7167C14.9917 15.4667 14.9583 15.2084 14.8333 14.9917C14.3583 14.1751 14.3 13.3334 14.6667 12.6917C15.0333 12.0501 15.7917 11.6834 16.7417 11.6834C17.275 11.6834 17.7 11.2584 17.7 10.7251V9.25841C17.7 8.73341 17.275 8.30008 16.7417 8.30008C15.7917 8.30008 15.0333 7.93341 14.6667 7.29174C14.3 6.65008 14.3583 5.80841 14.8333 4.99174C14.9583 4.77508 14.9917 4.51674 14.925 4.26674C14.8583 4.01674 14.7 3.81674 14.4833 3.68341L13.0417 2.85841C12.6833 2.64174 12.2083 2.76674 11.9917 3.13341L11.9 3.29174C11.425 4.11674 10.7333 4.58341 9.99166 4.58341C9.24999 4.58341 8.55832 4.11674 8.08332 3.29174L7.99166 3.12508C7.78332 2.77508 7.31666 2.65008 6.95832 2.85841L5.51666 3.69174C5.29999 3.81674 5.13332 4.02508 5.06666 4.27508C4.99999 4.52508 5.03332 4.78341 5.15832 5.00008C5.63332 5.81674 5.69166 6.65841 5.32499 7.30008C4.95832 7.94174 4.19999 8.30841 3.24999 8.30841C2.71666 8.30841 2.29166 8.73341 2.29166 9.26674V10.7334C2.29166 11.2584 2.71666 11.6917 3.24999 11.6917C4.19999 11.6917 4.95832 12.0584 5.32499 12.7001C5.69166 13.3417 5.63332 14.1834 5.15832 15.0001C5.03332 15.2167 4.99999 15.4751 5.06666 15.7251C5.13332 15.9751 5.29166 16.1751 5.50832 16.3084L6.94999 17.1334C7.12499 17.2417 7.33332 17.2667 7.52499 17.2167C7.72499 17.1667 7.89166 17.0334 7.99999 16.8584L8.09166 16.7001C8.56666 15.8834 9.25832 15.4084 9.99999 15.4084Z" fill="#7D7C84" />
                                        </svg>
                                        <span className="ml-2">General</span>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item mb-3 mb-md-0">
                                <a class="nav-link medium font__size--14 text__14-1024 color__gray-2" id="pills-Host-tab" data-toggle="pill" href="#pills-Host" role="tab" aria-controls="pills-Host" aria-selected="false">
                                    <div className="d-flex align-items-center svg">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.633 9.68341C7.608 9.68341 7.59133 9.68341 7.56633 9.68341C7.52467 9.67508 7.46633 9.67508 7.41633 9.68341C4.99967 9.60841 3.17467 7.70841 3.17467 5.36675C3.17467 2.98341 5.11633 1.04175 7.49967 1.04175C9.883 1.04175 11.8247 2.98341 11.8247 5.36675C11.8163 7.70841 9.983 9.60841 7.658 9.68341C7.64967 9.68341 7.64133 9.68341 7.633 9.68341ZM7.49967 2.29175C5.808 2.29175 4.42467 3.67508 4.42467 5.36675C4.42467 7.03341 5.72467 8.37508 7.383 8.43341C7.433 8.42508 7.54133 8.42508 7.64967 8.43341C9.283 8.35841 10.5663 7.01675 10.5747 5.36675C10.5747 3.67508 9.19133 2.29175 7.49967 2.29175Z" fill="#7D7C84" />
                                            <path d="M13.783 9.79159C13.758 9.79159 13.733 9.79159 13.708 9.78325C13.3663 9.81659 13.0163 9.57492 12.983 9.23325C12.9497 8.89159 13.158 8.58325 13.4997 8.54159C13.5997 8.53325 13.708 8.53325 13.7997 8.53325C15.0163 8.46659 15.9663 7.46659 15.9663 6.24159C15.9663 4.97492 14.9413 3.94992 13.6747 3.94992C13.333 3.95825 13.0497 3.67492 13.0497 3.33325C13.0497 2.99159 13.333 2.70825 13.6747 2.70825C15.6247 2.70825 17.2163 4.29992 17.2163 6.24992C17.2163 8.16659 15.7163 9.71659 13.808 9.79159C13.7997 9.79159 13.7913 9.79159 13.783 9.79159Z" fill="#7D7C84" />
                                            <path d="M7.64134 18.7916C6.00801 18.7916 4.36634 18.3749 3.12467 17.5416C1.96634 16.7749 1.33301 15.7249 1.33301 14.5833C1.33301 13.4416 1.96634 12.3833 3.12467 11.6083C5.62467 9.94992 9.67467 9.94992 12.158 11.6083C13.308 12.3749 13.9497 13.4249 13.9497 14.5666C13.9497 15.7083 13.3163 16.7666 12.158 17.5416C10.908 18.3749 9.27467 18.7916 7.64134 18.7916ZM3.81634 12.6583C3.01634 13.1916 2.58301 13.8749 2.58301 14.5916C2.58301 15.2999 3.02467 15.9833 3.81634 16.5083C5.89134 17.8999 9.39134 17.8999 11.4663 16.5083C12.2663 15.9749 12.6997 15.2916 12.6997 14.5749C12.6997 13.8666 12.258 13.1833 11.4663 12.6583C9.39134 11.2749 5.89134 11.2749 3.81634 12.6583Z" fill="#7D7C84" />
                                            <path d="M15.283 17.2917C14.9913 17.2917 14.733 17.0917 14.6747 16.7917C14.608 16.45 14.8247 16.125 15.158 16.05C15.683 15.9417 16.1663 15.7333 16.5413 15.4417C17.0163 15.0833 17.2747 14.6333 17.2747 14.1583C17.2747 13.6833 17.0163 13.2333 16.5497 12.8833C16.183 12.6 15.7247 12.4 15.183 12.275C14.8497 12.2 14.633 11.8667 14.708 11.525C14.783 11.1917 15.1163 10.975 15.458 11.05C16.1747 11.2083 16.7997 11.4917 17.308 11.8833C18.083 12.4667 18.5247 13.2917 18.5247 14.1583C18.5247 15.025 18.0747 15.85 17.2997 16.4417C16.783 16.8417 16.133 17.1333 15.4163 17.275C15.3663 17.2917 15.3247 17.2917 15.283 17.2917Z" fill="#7D7C84" />
                                        </svg>
                                        <span className="ml-2">Host</span>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item mb-3 mb-md-0">
                                <a class="nav-link medium font__size--14 text__14-1024 color__gray-2" id="pills-Experience-tab" data-toggle="pill" href="#pills-Experience" role="tab" aria-controls="pills-Experience" aria-selected="false">
                                    <div className="d-flex align-items-center svg">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.29167 18.9584C3.95 18.9584 3.66667 18.6751 3.66667 18.3334V1.66675C3.66667 1.32508 3.95 1.04175 4.29167 1.04175C4.63333 1.04175 4.91667 1.32508 4.91667 1.66675V18.3334C4.91667 18.6751 4.63333 18.9584 4.29167 18.9584Z" fill="#7D7C84" />
                                            <path d="M13.625 13.9583H4.29167C3.95 13.9583 3.66667 13.6749 3.66667 13.3333C3.66667 12.9916 3.95 12.7083 4.29167 12.7083H13.625C14.5333 12.7083 14.9583 12.4666 15.0417 12.2583C15.125 12.0499 15 11.5833 14.35 10.9416L13.35 9.94159C12.9417 9.58325 12.6917 9.04159 12.6667 8.44159C12.6417 7.80825 12.8917 7.18325 13.35 6.72492L14.35 5.72492C14.9667 5.10825 15.1583 4.60825 15.0667 4.39159C14.975 4.17492 14.5 3.95825 13.625 3.95825H4.29167C3.94167 3.95825 3.66667 3.67492 3.66667 3.33325C3.66667 2.99159 3.95 2.70825 4.29167 2.70825H13.625C15.45 2.70825 16.0333 3.46659 16.225 3.91659C16.4083 4.36659 16.5333 5.31659 15.2333 6.61659L14.2333 7.61659C14.025 7.82492 13.9083 8.11659 13.9167 8.40825C13.925 8.65825 14.025 8.88325 14.2 9.04159L15.2333 10.0666C16.5083 11.3416 16.3833 12.2916 16.2 12.7499C16.0083 13.1916 15.4167 13.9583 13.625 13.9583Z" fill="#7D7C84" />
                                        </svg>
                                        <span className="ml-2">Experience host</span>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item mb-3 mb-md-0">
                                <a class="nav-link medium font__size--14 text__14-1024 color__gray-2" id="pills-Travel-tab" data-toggle="pill" href="#pills-Travel" role="tab" aria-controls="pills-Travel" aria-selected="false">
                                    <div className="d-flex align-items-center svg">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.99999 18.9667C8.76666 18.9667 7.52499 18.5001 6.55833 17.5751C4.09999 15.2084 1.38333 11.4334 2.40833 6.94175C3.33333 2.86675 6.89166 1.04175 9.99999 1.04175C9.99999 1.04175 9.99999 1.04175 10.0083 1.04175C13.1167 1.04175 16.675 2.86675 17.6 6.95008C18.6167 11.4417 15.9 15.2084 13.4417 17.5751C12.475 18.5001 11.2333 18.9667 9.99999 18.9667ZM9.99999 2.29175C7.57499 2.29175 4.45833 3.58341 3.63333 7.21675C2.73333 11.1417 5.19999 14.5251 7.43333 16.6667C8.87499 18.0584 11.1333 18.0584 12.575 16.6667C14.8 14.5251 17.2667 11.1417 16.3833 7.21675C15.55 3.58341 12.425 2.29175 9.99999 2.29175Z" fill="#7D7C84" />
                                            <path d="M8.95834 11.4584C8.8 11.4584 8.64167 11.4001 8.51667 11.2751L7.26667 10.0251C7.025 9.78345 7.025 9.38345 7.26667 9.14178C7.50834 8.90011 7.90833 8.90011 8.15 9.14178L8.95834 9.95011L11.85 7.05845C12.0917 6.81678 12.4917 6.81678 12.7333 7.05845C12.975 7.30011 12.975 7.70011 12.7333 7.94178L9.4 11.2751C9.275 11.4001 9.11667 11.4584 8.95834 11.4584Z" fill="#7D7C84" />
                                        </svg>

                                        <span className="ml-2">Travel list</span>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-General" role="tabpanel" aria-labelledby="pills-General-tab">
                                {
                                    accordions.map((obj) => {
                                        return <div className="mb-2">
                                            <AccordionFAQ data={obj} />
                                        </div>
                                    })
                                }
                            </div>
                            <div class="tab-pane fade" id="pills-Host" role="tabpanel" aria-labelledby="pills-Host-tab">
                                {
                                    accordions.map((obj) => {
                                        return <div className="mb-2">
                                            <AccordionFAQ data={obj} />
                                        </div>
                                    })
                                }
                            </div>
                            <div class="tab-pane fade" id="pills-Experience" role="tabpanel" aria-labelledby="pills-Experience-tab">
                                {
                                    accordions.map((obj) => {
                                        return <div className="mb-2">
                                            <AccordionFAQ data={obj} />
                                        </div>
                                    })
                                }
                            </div>
                            <div class="tab-pane fade" id="pills-Travel" role="tabpanel" aria-labelledby="pills-Travel-tab">
                                {
                                    accordions.map((obj) => {
                                        return <div className="mb-2">
                                            <AccordionFAQ data={obj} />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div >
        </Fragment >
    );
};

export default Faq;
