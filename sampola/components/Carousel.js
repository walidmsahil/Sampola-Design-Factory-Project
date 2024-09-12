"use client";
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const Carousel = ({ slides }) => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // 插件可以在这里添加
    ]
  )

  return (
    <div ref={sliderRef} className="keen-slider">
      {slides?.map((slide, index) => (
        <div key={index} className="keen-slider__slide h-24">
          <img src={`http://localhost:1337${slide?.attributes?.url}`} alt={slide?.attributes?.caption || `Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  )
}

export default Carousel
