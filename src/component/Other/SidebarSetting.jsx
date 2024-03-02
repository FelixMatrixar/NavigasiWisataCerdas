import React, { Component } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const SidebarSetting = (props) => {
    return (
        <Fragment>
            <ul className="wrapper__list-side-menu">
                <li>
                    <NavLink exact to="/profile/personal" className="color__black">
                        <div className="d-flex align-items-center">
                            <img src="./../images/ds.png" alt="" />
                            <span className="medium font__size--16 text__16-1024 ml-2">Personal info</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile/security" className="color__black">
                        <div className="d-flex align-items-center">
                            <img src="./../images/sas (1).png" alt="" />
                            <span className="medium font__size--16 text__16-1024 ml-2">Login & security</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile/payment" className="color__black">
                        <div className="d-flex align-items-center">
                            <img src="./../images/sas (4).png" alt="" />
                            <span className="medium font__size--16 text__16-1024 ml-2">Payment</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile/notification" className="color__black">
                        <div className="d-flex align-items-center">
                            <img src="./../images/sas (3).png" alt="" />
                            <span className="medium font__size--16 text__16-1024 ml-2">Notifications</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile/privacy" className="color__black">
                        <div className="d-flex align-items-center">
                            <img src="./../images/sas (2).png" alt="" />
                            <span className="medium font__size--16 text__16-1024 ml-2">Privacy & sharing</span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </Fragment>
    )
}

export default SidebarSetting