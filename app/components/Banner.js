'use client'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Header, { result } from './Header';






function Banner({result}) {
  const isXLargeScreen = useMediaQuery({ minWidth: 1200 });
  const  isMdScreen  = useMediaQuery({ minWidth: 760 });




  return (
    <div className='relative mt-[1rem] max-w-screen-xl mx-auto '>
      {result ? (<div></div>): (<Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}>
      
      <div>{isXLargeScreen ? (
        <div>
          <img
            loading="lazy"
            src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blta21483f51a27968d/64f76680c12d773bd8d033ff/Jordan7RetroInfraredEarly_Primary_Desktop.jpg?quality=75&auto=webp&format=pjpg&dpr=2&width=1246"
            alt="XLarge Banner"
          />
        </div>
      ) : isMdScreen ? (
        <div>
          <img
            loading="lazy"
            src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt58b3c5f1278e7235/64fa08ef539fa137874ad3e1/Supreme-FW23-Week-3_Primary_Mobile_EN.png?quality=75&auto=webp&format=pjpg&dpr=2"
            alt="Md Banner"
          />
        </div>
      ) : (
        <img
          loading="lazy"
          src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt3bd7fa9d9f1034c1/64f0ebc31cee17161ddb66b9/supreme823.jpg?quality=75&auto=webp&format=pjpg&dpr=2&width=234&height=160"
          alt="Small Banner"
        />
      )}
      </div>
      {isXLargeScreen ? (
        <div>
          <img
            loading="lazy"
            src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt0f9237506efdb1e1/64f9ca3d29dd362e253b4dbe/NYFW_InfluencerHub_Primary_Desktop.jpg?quality=75&auto=webp&format=pjpg&dpr=2&width=1246"
            alt="XLarge Banner"
          />
        </div>
      ) : isMdScreen ? (
        <div>
          <img
            loading="lazy"
            src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt60eab35828f23ba3/64f9ca421d03ad21eddf2e4e/NYFW_InfluencerHub_Primary_Mobile.jpg?quality=75&auto=webp&format=pjpg&dpr=2"
            alt="Md Banner"
          />
        </div>
      ) : (
        <img
          loading="lazy"
          src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt4adde543939ab992/64f229e5540753708d7b62ee/Jordan7RetroInfraredEarly_Primary_Mobile.jpg?quality=75&auto=webp&format=pjpg&dpr=2"
          alt="Small Banner"
        />
      )}


      
      {/* Add more banner images and conditions for Medium and Large screens as needed */}








      
      


        </Carousel>)}

        <div>
          <h1 className='text-xl font-semibold'>Recommended for you:</h1>

        </div>
        
        <div>
        {result ? (
          <div className="flex flex-wrap justify-center">
            {result.map((product, index) => (
              <div onClick={() => handleClick(product)} key={index} className="p-2 m-1 border border-gray-300 w-1/1 sm:w-1/1 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <div className="bg-white">
                  <h1 className='text-sm font-bold'>{product.value}</h1>
                  <p className='text-sm'> {product.data.lowest_price_cents / 100 + '$'}</p>
                  <p className='text-sm'> {product.data.release_date_year }</p>
  
                  <div className="flex justify-center">
                    <Image className='' src={product.data.image_url} width={500} height={500} alt="Product" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}
       
      </div>

    </div>
  )
}

export default Banner