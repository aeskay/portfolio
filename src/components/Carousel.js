import React from 'react'
import {reviews} from '../datalist'
import Slider from 'infinite-react-carousel';

function Carousel() {
    return (
        <div className="carouselDiv">
            <Slider dots style={{width: "80%"}}>
                {reviews.map(item => {
                    return (
                        <div key={item.id}>
                            <img src={item.image} alt={item.img} className="sliderImg fader" />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel
