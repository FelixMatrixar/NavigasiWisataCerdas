import React, { Component } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'

const AccordionOffer = (props) => {
    const [toogle, setToogle] = useState(false)
    return (
        <Fragment>
            <div className={"wrapper__accordion-offer " + (toogle ? "active" : "")}>
                <div className="head pointer" onClick={() => setToogle(!toogle)}>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="icon">
                                <img src={props.data.icon} alt="" />
                            </div>
                            <span className='ml-2 semi-bold font__size--18 text__18-1024'>{props.data.title} <span className='medium font__size--16 text__16-1024 color__gray-2'>({props.data.detail.length} facilities)</span></span>
                        </div>
                        <div className="plus">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <ul className='list font__size--16 text__16-1024 medium color__gray-2 ml-3'>
                        {
                            props.data.detail.map((obj) => {
                                return <li>{obj}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </Fragment >
    )
}

export default AccordionOffer