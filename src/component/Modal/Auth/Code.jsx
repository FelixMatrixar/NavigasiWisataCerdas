import React, { useState, Fragment } from "react";

const Code = (props) => {
    const onLogin = () => {
        localStorage.setItem("status", "login");
    }
    return (
        <Fragment>
            <div
                class={
                    "wrapper__modal-wrap modal fade " + (props.modalCode ? "show" : "")
                }
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="bg__wrap"
                    onClick={() => props.onCLickModalCode()}
                ></div>
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content position-relative">
                        <div className="close__wrap pointer" onClick={() => props.onCLickModalCode()}>
                            <img src="./../images/icon (1).png" alt="" />
                        </div>

                        <div className="text-center mb-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="./../images/radar.png" alt="" />
                                <span className="semi-bold font__size--18 text__18-1024 ml-2">Trav.id</span>
                            </div>
                            <h4 className="semi-bold font__size--32 text__32-1024 mt-3">Enter your security code</h4>
                            <p className="normal font__size--16 text__16-1024 color__gray-2">We texted your code to tranm••••••••••••@gm•••.com</p>
                        </div>


                        <div className="wrapper__input-code d-flex justify-content-center justify-content-sm-between align-items-centermy-4">
                            <div className="form-group mb-4 field__input verification">
                                <input
                                    required
                                    type="text"
                                    className="form-control medium font__size--32 text__32-1024 text__32-xs semi-bold color__black text-center"
                                    maxlength="1"
                                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                                />
                            </div>
                            <div className="form-group mb-4 field__input verification">
                                <input
                                    required
                                    type="text"
                                    className="form-control medium font__size--32 text__32-1024 text__32-xs semi-bold color__black text-center"
                                    maxlength="1"
                                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                                />
                            </div>
                            <div className="form-group mb-4 field__input verification">
                                <input
                                    required
                                    type="text"
                                    className="form-control medium font__size--32 text__32-1024 text__32-xs semi-bold color__black text-center"
                                    maxlength="1"
                                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                                />
                            </div>
                            <div className="form-group mb-4 field__input verification">
                                <input
                                    required
                                    type="text"
                                    className="form-control medium font__size--32 text__32-1024 text__32-xs semi-bold color__black text-center"
                                    maxlength="1"
                                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                                />
                            </div>
                            <div className="form-group mb-4 field__input verification">
                                <input
                                    required
                                    type="text"
                                    className="form-control medium font__size--32 text__32-1024 text__32-xs semi-bold color__black text-center"
                                    maxlength="1"
                                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                                />
                            </div>
                            <div className="form-group mb-4 field__input verification">
                                <input
                                    required
                                    type="text"
                                    className="form-control medium font__size--32 text__32-1024 text__32-xs semi-bold color__black text-center"
                                    maxlength="1"
                                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                                />
                            </div>
                        </div>


                        <button className="btn btn__blue shadow color__white w-100 font__size--16 text__16-1024 medium rounded__50" onClick={(e) => {
                            onLogin();
                            props.onCLickModalCode()
                        }}>Continue</button>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Code;
