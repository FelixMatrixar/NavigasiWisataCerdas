import React, { Component } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'

const ReviewTravel = (props) => {
    const [toogle, setToogle] = useState(props.love ? props.love : false)
    return (
        <Fragment>
            <div className="wrapper__review-travel">
                <img src="./../images/hfghfg.png" className='profile' alt="" />
                <div className="about ml-4">
                    <div className="d-flex align-items-center mb-2">
                        <img src="./../images/fgdfg.png" alt="" />
                        <span className='medium font__size--16 text__16-1024 ml-2'>4.8 <span className='color__gray-2 ml-2'>1 day ago</span></span>
                    </div>
                    <h5 className='medium font__size--16 text__16-1024 mb-0'>Marcus Westervelt</h5>
                    <p className='normal font__size--14 text__14-1024 mb-1'>Great experience, and the customer service was top notch. Everything was explained thoroughly, but it was done in a relaxed way, so I never felt pressured or rushed. The price was great too. I would highly recommend!</p>
                    <div className="d-inline-block">
                        <div className="d-flex align-items-center pointer" onClick={() => setToogle(!toogle)}>
                            {toogle ? <img src="./../images/heart.png" alt="" /> : <img src="./../images/heart (1).png" alt="" />}<span className='normal font__size--14 text__14-1024 ml-2'>32</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ReviewTravel