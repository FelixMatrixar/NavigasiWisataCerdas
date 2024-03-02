import React, { useState, Fragment } from "react";

const Filter = (props) => {
    return (
        <Fragment>
            <div
                class={
                    "wrapper__modal-wrap modal fade " + (props.modalFilter ? "show" : "")
                }
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="bg__wrap"
                    onClick={() => props.onCLickModalFilter()}
                ></div>
                <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div class="modal-content position-relative">
                        <div className="close__wrap pointer" onClick={() => props.onCLickModalFilter()}>
                            <img src="./../images/icon (1).png" alt="" />
                        </div>

                        <h4 className="semi-bold font__size--24 text__24-1024 mb-4">Filter</h4>

                        <div className="mb-3">
                            <h2 className="semi-bold font__size--32 text__32-1024 mb-0">Price range</h2>
                            <p className="font__size--16 text__16-1024 normal color__gray-2">The average nightly price is <span className="semi-bold font__size--14 text__14-1024">$69</span></p>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--20 text__20-1024">Min Price</label>
                                    <div className="wrapper__field-wrap filter d-flex align-items-center text-right">
                                        <span className="medium font__size--24 text__24-1024 wrap__logo">$</span>
                                        <input type="text" className="form-control text-right medium font__size--16 text__16-1024" placeholder="0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--20 text__20-1024">Email</label>
                                    <div className="wrapper__field-wrap filter d-flex align-items-center text-right">
                                        <span className="medium font__size--24 text__24-1024 wrap__logo">$</span>
                                        <input type="text" className="form-control text-right medium font__size--16 text__16-1024" placeholder="0" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className="semi-bold font__size--32 text__32-1024 mb-3">Type of place</h4>

                        <div className="wrapper__flex-radio-filter flex-wrap flex-md-nowrap mb-4">
                            <div className="items mb-3 mb-md-0 flex-shrink-0">
                                <div className="wrapper__checkbox-auth mb-3 position-relative d-flex align-items-start mb-3">
                                    <input type="radio" id="typetravelEntire" name="typetravel" value="Entire" />
                                    <label className="circle flex-shrink-0" for="typetravelEntire">
                                        <img src="./../images/check.png" className="check" alt="" />
                                    </label>
                                    <label className="semi-bold font__size--18 text__18-1024 ml-2" for="typetravelEntire">
                                        <span>Entire place</span>
                                        <br />
                                        <span className="normal font__size--14 text__14-1024 color__gray-2">A place all to yourself</span>
                                    </label>
                                </div>
                            </div>
                            <div className="items mb-3 mb-md-0">
                                <div className="wrapper__checkbox-auth mb-3 position-relative d-flex align-items-start mb-3">
                                    <input type="radio" id="typetravelPrivate" name="typetravel" value="Private" />
                                    <label className="circle flex-shrink-0" for="typetravelPrivate">
                                        <img src="./../images/check.png" className="check" alt="" />
                                    </label>
                                    <label className="semi-bold font__size--18 text__18-1024 ml-2" for="typetravelPrivate">
                                        <span>Private room</span>
                                        <br />
                                        <span className="normal font__size--14 text__14-1024 color__gray-2">Your own room in a home or a hotel, plus some shared common spaces</span>
                                    </label>
                                </div>
                            </div>
                            <div className="items mb-3 mb-md-0">
                                <div className="wrapper__checkbox-auth mb-3 position-relative d-flex align-items-start mb-3">
                                    <input type="radio" id="typetravelShared" name="typetravel" value="Shared" />
                                    <label className="circle flex-shrink-0" for="typetravelShared">
                                        <img src="./../images/check.png" className="check" alt="" />
                                    </label>
                                    <label className="semi-bold font__size--18 text__18-1024 ml-2" for="typetravelShared">
                                        <span>Shared room</span>
                                        <br />
                                        <span className="normal font__size--14 text__14-1024 color__gray-2">A sleeping space and common areas that may be shared with others</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper__action-filter d-flex flex-wrap align-items-center justify-content-between">
                            <a href="#!" className="medium font__size--16 text__16-1024 color__black">Reset all</a>
                            <a href="#!" className="medium font__size--16 text__16-1024 btn btn__blue color__white shadow rounded__50">Show 1,000+ homes</a>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Filter;
