import React from 'react'
import Carousel from './Carousel'

function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <div>
                <h1 className="headText" style={{textAlign: "center", padding:"30px 10px"}}>MY CLIENTS' WORDS</h1>
                <div>
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
