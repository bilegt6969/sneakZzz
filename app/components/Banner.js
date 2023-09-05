'use client'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


function Banner() {
  return (
    <div className='relative mt-[10rem]'>
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <div><img loading='lazy' src='https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/082/610/602/original/1008702_01.jpg.jpeg?action=crop&width=600'/></div>
        <div><img loading='lazy' src='https://image.goat.com/750/attachments/product_template_pictures/images/071/445/308/original/719082_00.png.png'/></div>
        <div><img loading='lazy' src='https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/216/902/original/886847_01.jpg.jpeg?action=crop&width=600'/></div>


        </Carousel>
        <div>
       
      </div>
    </div>
  )
}

export default Banner