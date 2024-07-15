import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/slider-1.jpg';
import slider2 from '../../assets/slider-2.jpg';

const BannerSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

  return (
    <div>
        <Slider {...settings}>
                        <div>
                            <div className='relative'>
                                <img src={slider1} className='block mx-auto w-[85vw] h-[70vh] rounded-xl' alt="Slider 1" />
                                <div className='absolute w-[40%] inset-y-0 left-24 mx-12 '>
                                    <div className='flex justify-center text-wrap items-center h-full  px-4'>
                                        <div>
                                            <h1 className='text-5xl font-bold leading-[3.5rem]'>SuperMarket For Fresh Grocery</h1>
                                            <p className='text-lg font-medium text-gray-500 mt-4'>Introduced a new model for online grocery shopping and convenient home delivery.</p>
                                            <button className='bg-black text-white text-xl font-semibold px-6 py-2 rounded-lg mt-6 flex gap-4 items-center'>
                                                Shop Now <FaArrowRightLong />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        <div>
                            <div className='relative'>
                                <img src={slider2} className='block mx-auto w-[85vw] h-[70vh] rounded-xl' alt="Slider 2" />
                                <div className='absolute w-[40%] inset-y-0 left-24 mx-12'>
                                    <div className='flex justify-center text-wrap items-center h-full  px-4'>
                                        <div>
                                            <h1 className='text-5xl font-bold leading-[3.5rem]'>Free Shipping At Your Door Step</h1>
                                            <p className='text-lg font-medium text-gray-500 mt-4'>Free Shipping to First-Time Customers Only, After promotions and discounts are applied.</p>
                                            <button className='bg-black text-white text-xl font-semibold px-6 py-2 rounded-lg mt-6 flex gap-4 items-center'>
                                                Shop Now <FaArrowRightLong />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </Slider>
    </div>
  )
}

export default BannerSlider