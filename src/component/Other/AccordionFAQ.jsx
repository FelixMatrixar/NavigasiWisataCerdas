import React, { Component } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'

const AccordionFAQ = (props) => {
    const [toogle, setToogle] = useState(false)
    return (
        <Fragment>
            <div className={"wrapper__accordion-offer " + (toogle ? "active" : "")}>
                <div className="head pointer" onClick={() => setToogle(!toogle)}>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <span className='semi-bold font__size--18 text__18-1024'>{props.data.title}</span>
                        </div>
                        <div className="plus">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <p className='medium font__size--16 text__16-1024 color__gray-2 mb-0'>{props.data.desc}</p>
                </div>
            </div>
        </Fragment >
    )
}

export default AccordionFAQ