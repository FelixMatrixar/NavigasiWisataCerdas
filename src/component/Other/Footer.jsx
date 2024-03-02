import React, { Component } from 'react'
import { Fragment } from 'react'

const Footer = (props) => {
    return (
        <Fragment>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4 my-md-auto text-center text-md-left">
                            <div className="d-flex align-items-center justify-content-md-start justify-content-center mb-3">
                                <img src="./../images/radar.png" alt="" />
                                <span className='ml-2 semi-bold font__size--16 text__16-1024'>Trav.id</span>
                            </div>
                            <p className='normal font__size--16 text__16-1024 color__gray-2'>Looking to travel the world? Here are some <br /> helpful tips to get you started on your trip.</p>

                            <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-4">
                                <a href="#!" className='d-inline-block mr-3'>
                                    <img src="./../images/fgf.png" alt="" />
                                </a>
                                <a href="#!" className='d-inline-block mr-3'>
                                    <img src="./../images/instagram.png" alt="" />
                                </a>
                                <a href="#!" className='d-inline-block mr-3'>
                                    <img src="./../images/linkedin.png" alt="" />
                                </a>
                                <a href="#!" className='d-inline-block mr-3'>
                                    <img src="./../images/twitter.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 my-auto text-center text-md-right">
                            <div className="wrapper__list-menu justify-content-md-end justify-content-center medium font__size--16 text__16-1024 mb-4">
                                <a href="#!" className='color__black'>Discover</a>
                                <a href="#!" className='color__black'>Blog</a>
                                <a href="#!" className='color__black'>About us</a>
                                <a href="#!" className='color__black'>FAQ</a>
                            </div>
                            <h5 className='medium font__size--16 text__16-1024 mb-3'>Join our community 🔥</h5>
                            <div className="d-inline-block">
                                <div className="wrapper__field-subscibe">
                                    <input type="text" placeholder='Enter your email' className='normal font__size--14 text__14-1024 color__gray-2' />
                                    <div className="send ml-2">
                                        <img src="./../images/Line.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Footer