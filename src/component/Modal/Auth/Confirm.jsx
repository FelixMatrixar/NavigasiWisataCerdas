import React, { useState, Fragment } from "react";

const Confirm = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Fragment>
            <div
                class={
                    "wrapper__modal-wrap modal fade " + (props.modalConfirm ? "show" : "")
                }
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="bg__wrap"
                    onClick={() => props.onCLickModalConfirm()}
                ></div>
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content position-relative">
                        <div className="close__wrap pointer" onClick={() => props.onCLickModalConfirm()}>
                            <img src="./../images/icon (1).png" alt="" />
                        </div>

                        <div className="text-center mb-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="./../images/radar.png" alt="" />
                                <span className="semi-bold font__size--18 text__18-1024 ml-2">Trav.id</span>
                            </div>
                            <h4 className="semi-bold font__size--32 text__32-1024 mt-3">Let’s confirm it’s <br /> really you</h4>
                            <p className="normal font__size--16 text__16-1024 color__gray-2">Help us secure your account. Please complete <br className="d-none d-sm-block" /> the verifications below</p>
                        </div>


                        <div className="wrapper__checkbox-auth mb-3 position-relative d-flex align-items-start mb-3">
                            <input type="radio" id="verifCodeEmail" name="verifCode" value="email" />
                            <label className="circle" for="verifCodeEmail">
                                <img src="./../images/check.png" className="check" alt="" />
                            </label>
                            <label className="medium color__gray-2 font__size--18 text__18-1024 text__18-sm text__18-xs ml-2" for="verifCodeEmail">
                                Get the code by email at
                                <br />
                                joseph••••@gm•••.com
                            </label>
                        </div>

                        <div className="wrapper__checkbox-auth mb-3 position-relative d-flex align-items-start mb-3">
                            <input type="radio" id="verifCodePhone" name="verifCode" value="phone" />
                            <label className="circle" for="verifCodePhone">
                                <img src="./../images/check.png" className="check" alt="" />
                            </label>
                            <label className="medium color__gray-2 font__size--18 text__18-1024 text__18-sm text__18-xs ml-2" for="verifCodePhone">
                                Get the code by text message
                                <br />
                                (SM) at +1 21 726 918
                            </label>
                        </div>


                        <button className="btn btn__blue shadow color__white w-100 font__size--16 text__16-1024 medium rounded__50" onClick={(e) => props.onCLickSwitchModal("code")}>Continue</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Confirm;
