import React, { Component, Fragment } from "react";
import { useId } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ToogleCheck = (props) => {
    const [status, setStatus] = useState(props.status ? props.status : false)

    const toggleStatus = (e) => {
        if (e.target.checked) {
            setStatus(true)
        } else {
            setStatus(false)
        }
    };

    const id = useId();
    const uniq = "checkbox" + id;

    return (
        <Fragment>
            <label className="wrapper__toggle-theme flex-shrink-0" htmlFor={uniq}>
                <input
                    type="checkbox"
                    onChange={toggleStatus}
                    defaultChecked={status}
                    id={uniq}
                />
                <div className="slider round"></div>
            </label>

        </Fragment >
    );
};

export default ToogleCheck;
