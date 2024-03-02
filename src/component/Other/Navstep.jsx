import React, { Component } from 'react'
import { Fragment } from 'react'

const Navstep = (props) => {
    return (
        <Fragment>
            <div>
                <div className="d-flex align-items-center flex-wrap medium font__size--14 text__14-1024">
                    <a href="#!" className='color__black mb-3 mb'>Home</a>
                    {
                        props.step ?
                            <Fragment>
                                <img src="./../images/sdf.png" className='mx-3 mb-3' alt="" />
                                <a href="#!" className='color__black mb-3 mb'>{props.step}</a>
                            </Fragment> : ""
                    }

                    {
                        props.now ? <Fragment>
                            <img src="./../images/sdf.png" className='mx-3 mb-3' alt="" />
                            <a href="#!" className={'color__black mb-3 mb hover ' + (props.end ? "" : "opacity__5")}>{props.now}</a>
                        </Fragment> : ""
                    }

                    {
                        props.end ? <Fragment>
                            <img src="./../images/sdf.png" className='mx-3 mb-3' alt="" />
                            <a href="#!" className='color__black mb-3 mb opacity__5 hover'>{props.end}</a>
                        </Fragment> : ""
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Navstep