import React, { useState, Fragment } from "react";

const Register = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Fragment>
            <div
                class={
                    "wrapper__modal-wrap modal fade " + (props.modalRegister ? "show" : "")
                }
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="bg__wrap"
                    onClick={() => props.onCLickModalRegister()}
                ></div>
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content position-relative">
                        <div className="close__wrap pointer" onClick={() => props.onCLickModalRegister()}>
                            <img src="./../images/icon (1).png" alt="" />
                        </div>
                        <div className="text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="./../images/radar.png" alt="" />
                                <span className="semi-bold font__size--18 text__18-1024 ml-2">Trav.id</span>
                            </div>
                            <h4 className="semi-bold font__size--32 text__32-1024 mt-3 mb-4">Welcome to Trav.id</h4>

                            <div className="row wrapper__button-auth position-relative z-2">
                                <div className="col-md-6 mb-4 my-md-auto">
                                    <a href="#!" className="btn btn__blue shadow w-100 px-3 rounded__50 text-left normal font__size--14 text__14-1024 color__white">
                                        <div className="d-flex align-items-center">
                                            <img src="./../images/fsdfsd.png" alt="" />
                                            <span className="ml-2">Continue with Google</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 my-auto">
                                    <a href="#!" className="btn btn__black shadow w-100 px-3 rounded__50 text-left normal font__size--14 text__14-1024 color__white">
                                        <div className="d-flex align-items-center">
                                            <img src="./../images/Filled.png" alt="" />
                                            <span className="ml-2">Continue with Google</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="my-4 wrapper__line-space position-relative text-center">
                                <div className="wrap normal color__gray-2 font__size--14 text__14-1024">
                                    Or Sign Up with
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="" className="medium font__size--14 text__14-1024">Email</label>
                            <div className="wrapper__field-wrap">
                                <input type="text" className="form-control medium font__size--16 text__16-1024" placeholder="Enter your email" />
                            </div>
                        </div>


                        <button onClick={(e) => props.onCLickSwitchModal("confirm")} className="btn btn__blue shadow color__white w-100 font__size--16 text__16-1024 medium rounded__50">Continue</button>

                        <div className="wrapper__checkbox-auth my-4 position-relative d-flex align-items-center">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="circle" for="vehicle1">
                                <img src="./../images/check.png" className="check" alt="" />
                            </label>
                            <label className="medium color__gray-2 font__size--14 text__14-1024 text__14-1024 ml-2" for="vehicle1">I agree to Claraa <a href="#!" className="color__blue">Terms of Use</a> and <a href="#!" className="color__blue">Privacy Policy</a></label>
                        </div>

                        <div className="text-center font__size--16 text__16-1024 medium color__gray-2">
                            Already have an account? <a href="#!" onClick={(e) => props.onCLickSwitchModal("login")} className="color__blue">Log In</a>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Register;
