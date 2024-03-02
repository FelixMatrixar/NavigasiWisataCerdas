import React, { useState, Fragment, useRef, forwardRef } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import usePaymentInputs from 'react-payment-inputs/es/usePaymentInputs';
import dateFormat from 'dateformat';

import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Navstep from "../../component/Other/Navstep";

const RequestToBook = (props) => {
    const [toogleGues, setToogleGues] = useState(false);
    const [gues, setGues] = useState(2);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    const selectDate = useRef()

    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

    const [cardNumber, setCardNumber] = useState("");
    const handleChangeCardNumber = (e) => {
        setCardNumber(e.target.value)
    }

    const [expiryDate, setExpiryDate] = useState("");
    const handleChangeExpiryDate = (e) => {
        setExpiryDate(e.target.value)
    }

    const [cvc, setCvc] = useState("");
    const handleChangeCVC = (e) => {
        setCvc(e.target.value)
    }

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <img src="./../images/calendar-add.png" className="pointer" onClick={onClick} ref={ref} alt="" />
    ));

    return (
        <Fragment>
            <div className="overflow-hidden">
                <Navbar />
                <section>
                    <div className="container">
                        <Navstep step={"Destinations"} now={"Pasir putih resort"} end={"Request to Book"} />

                        <div className="row mt-5">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <h2 className="semi-bold font__size--32 text__32-1024 mb-4">Request to Book</h2>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <h5 className="medium font__size--14 text__14-1024">Check in</h5>
                                        <div className="wrapper__field-date position-relative w-100">
                                            <div className="d-flex align-items-center justify-content-between w-100">
                                                <div className="w-100 d-flex align-items-center">
                                                    <div className="d-inline-block">
                                                        <DatePicker
                                                            ref={selectDate}
                                                            selectsRange={true}
                                                            selected={startDate}
                                                            onChange={onChange}
                                                            startDate={startDate}
                                                            endDate={endDate}
                                                            customInput={<ExampleCustomInput />}
                                                            shouldCloseOnSelect={false}
                                                        />
                                                    </div>
                                                    <span className="ml-2 medium font__size--16 text__16-1024 color__gray-2 w-100">{dateFormat(startDate, "mmm dd, yyyy")} - {dateFormat(endDate, "mmm dd, yyyy")}</span>
                                                </div>
                                                <img src="./../images/edit-2.png" className="ml-2" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 position-relative z-2">
                                        <h5 className="medium font__size--14 text__14-1024">Guest</h5>
                                        <div className={"wrapper__select-option position-relative z-2 " + (toogleGues ? "active" : "")}>
                                            <div className="d-flex align-items-center justify-content-between pointer" onClick={() => setToogleGues(!toogleGues)}>
                                                <div className="d-flex align-items-center">
                                                    <img src="./../images/profile-2user.png" alt="" />
                                                    <span className="ml-2 medium font__size--16 text__16-1024">{gues} Guest</span>
                                                </div>
                                                <img src="./../images/arrow-down.png" alt="" className="arrow" />
                                            </div>
                                            <div className="guest__list meium font__size--16 text__16-1024">
                                                <div className="list pointer" onClick={() => {
                                                    setGues(1)
                                                    setToogleGues(!toogleGues)
                                                }}>1 Guest</div>
                                                <div className="list pointer" onClick={() => {
                                                    setGues(2)
                                                    setToogleGues(!toogleGues)
                                                }}>2 Guest</div>
                                                <div className="list pointer" onClick={() => {
                                                    setGues(3)
                                                    setToogleGues(!toogleGues)
                                                }}>3 Guest</div>
                                                <div className="list pointer" onClick={() => {
                                                    setGues(4)
                                                    setToogleGues(!toogleGues)
                                                }}>4 Guest</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="semi-bold font__size--20 text__20-1024 mb-4">Pay with</h4>

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

                                <h5 className="normal font__size--16 text__16-1024 text__16-1024 color__gray-2 my-4">Or  using a credit card</h5>

                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 color__black">Cardholder Name</label>
                                    <input className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 color__black">Card Number</label>
                                    <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} value={cardNumber} className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="Ex:  31111 1111 1111 1111" />
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="" className="medium font__size--14 text__14-1024 color__black w-100">Postal Code</label>
                                            <input type="text" className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="Postal or ZIP code" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="" className="medium font__size--14 text__14-1024 color__black">Expiration</label>
                                            <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiryDate} type="text" className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="MM/YY" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="" className="medium font__size--14 text__14-1024 color__black">CVV</label>
                                            <input {...getCVCProps({ onChange: handleChangeCVC })} value={cvc} type="text" className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field" />
                                        </div>
                                    </div>
                                </div>

                                <label class="wrapper__checkbox position-relative normal font__size--14 text__14-1024 text__12-1024 color__gray-1 d-flex align-items-center mb-5">
                                    <input type="checkbox" className="select" />
                                    <span class="checkmark mb-0 mr-3">
                                        <div className="box"></div>
                                    </span>
                                    Save card
                                </label>

                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 color__black">Message the host (Optional)</label>
                                    <textarea className="font__size--14 text__14-1024 color__gray-2 form-control wrapper__input-field textarea" placeholder="Type here..." name="" id="" cols="30" rows="10"></textarea>
                                </div>

                                <NavLink to="/booking" className="medium font__size--16 text__16-1024 btn btn__blue shadow rounded__50 color__white">Confirm and pay</NavLink>

                            </div>
                            <div className="col-lg-4">
                                <div className="wrapper__detail-reserve">

                                    <img src="./../images/Image Primary.png" className="mb-3 images__book-detail" alt="" />

                                    <h5 className="normal font__size--16 text__16-1024"><span className="semi-bold font__size--16 text__16-1024">5 Nights</span> in Pasir putih resort</h5>
                                    <p className="normal font__size--16 text__16-1024 color__gray-2">Feb 8, 2023 - Feb 13, 2023</p>

                                    <div className="wrapper__field-subscibe email">
                                        <input type="text" placeholder='Enter discound code' className='normal font__size--14 text__14-1024 color__gray-2 w-100' />
                                        <div className="send ml-2">
                                            <img src="./../images/Line.png" alt="" />
                                        </div>
                                    </div>

                                    <div className="mt-4 mb-2">
                                        <h5 className="semi-bold font__size--16 text__16-1024 mb-0">Price details</h5>
                                    </div>

                                    <div className="">
                                        <div className="wrapper__side-detail clear d-flex align-items-center justify-content-between">
                                            <span className="medium font__size--16 text__16-1024 color__gray-2">$200 x 5 nights</span>
                                            <span className="medium font__size--16 text__16-1024">$1,000</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="wrapper__side-detail clear d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="medium font__size--16 text__16-1024 color__gray-2 mr-2">Cleaning fee</span>
                                                <img src="./../images/info-circle.png" alt="" />
                                            </div>
                                            <span className="medium font__size--16 text__16-1024">$64.00</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="wrapper__side-detail clear d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="medium font__size--16 text__16-1024 color__gray-2 mr-2">Service fee</span>
                                                <img src="./../images/info-circle.png" alt="" />
                                            </div>
                                            <span className="medium font__size--16 text__16-1024">$0</span>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="wrapper__side-detail d-flex align-items-center justify-content-between">
                                            <span className="medium font__size--16 text__16-1024 color__gray-2">Total before taxes</span>
                                            <span className="medium font__size--16 text__16-1024">$990</span>
                                        </div>
                                    </div>


                                    <div className="d-inline-block">
                                        <a href="#!" className="color__gray-1">
                                            <span className="normal font__size--16 text__16-1024 color__gray-2">Your booking is protected by <span className="semi-bold color__black">Trav.id</span></span>
                                        </a>
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

export default RequestToBook;
