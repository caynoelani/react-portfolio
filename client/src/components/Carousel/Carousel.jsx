import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import './Carousel.scss'

const Carousel = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderLength = props.images.length;

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
    }


    return (
        <div className={`carousel ${props.classes}`}>
            <div className="carousel__slides">
                <FaArrowCircleLeft className='left-arrow' onClick={prevSlide}/>
                <FaArrowCircleRight className='right-arrow' onClick={nextSlide}/>
                <div className="slide">
                    <img src={props.images[currentSlide]} alt='project thumbnail'/>
                </div>
            </div>
        </div>
    )
}

export default Carousel
