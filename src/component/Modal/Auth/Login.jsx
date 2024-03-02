import React, { useState, Fragment } from "react";

const Login = (props) => {
    const [showPassword, setShowPassword] = useState(true);
    return (
        <Fragment>
            <div
                class={
                    "wrapper__modal-wrap modal fade " + (props.modalLogin ? "show" : "")
                }
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="bg__wrap"
                    onClick={() => props.onCLickModalLogin()}
                ></div>
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content position-relative">
                        <div className="close__wrap pointer" onClick={() => props.onCLickModalLogin()}>
                            <img src="./../images/icon (1).png" alt="" />
                        </div>
                        <div className="text-center mb-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="./../images/radar.png" alt="" />
                                <span className="semi-bold font__size--18 text__18-1024 ml-2">Trav.id</span>
                            </div>
                            <h4 className="semi-bold font__size--32 text__32-1024 mt-3">Hey there, welome <br /> back!</h4>
                        </div>

                        <div className="form-group">
                            <label htmlFor="" className="medium font__size--14 text__14-1024">Email</label>
                            <div className="wrapper__field-wrap">
                                <input type="text" className="form-control medium font__size--16 text__16-1024" placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="" className="medium font__size--14 text__14-1024">Password</label>
                            <div className="wrapper__field-wrap d-flex align-items-center justify-content-between">
                                <input type={showPassword ? "password" : "text"} className="form-control medium font__size--16 text__16-1024" placeholder="Enter your password" />
                                <img src="./../images/eye-slash.png" className="pointer" onClick={() => setShowPassword(!showPassword)} alt="" />
                            </div>
                        </div>


                        <button className="btn btn__blue shadow color__white w-100 font__size--16 text__16-1024 medium rounded__50" onClick={(e) => props.onCLickSwitchModal("confirm")}>Continue</button>

                        <div className="text-center font__size--16 text__16-1024 medium color__gray-2 mt-4">
                            <a href="#!" className="d-inline-block color__gray-2">Forgot Password?</a>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
