import React from 'react';
import Navbar from '../components/Navbar';
import BannerSlider from '../components/slider/BannerSlider';
import FeaturedCategoires from '../components/slider/FeaturedCategoires';
import banner1 from '../assets/banner2.png'
import banner2 from '../assets/banner3.png'
import PopularProducts from '../components/products/PopularProducts';


const Home = () => {
    
    return (
        <div className=' overflow-x-hidden'>
            <div className=''>
                <Navbar />
            </div>
            <div className='w-full py-8'>
                <div className='container mx-auto'>
                    <BannerSlider />
                </div>
                <div className=' px-24 my-12 w-full'>
                    <FeaturedCategoires />
                </div>
                <div className='mt-12 px-28 flex justify-between gap-10 w-full h-72'>
                    <div className='w-[55%] relative h-full'>
                        <img src={banner1} className='h-full w-full rounded-2xl' alt="" />
                        <div className='absolute top-0 h-full right-0 px-6 flex justify-center items-center '>
                            <div>
                                <h1 className='text-3xl font-bold'>Fruits & Vegetables</h1>
                              
                                <div className=' w-full px-16'>
                                     <p className='text-xl font-normal  mt-6'>Get 15% off</p>
                                    <button className='bg-black  text-white text-xl font-semibold px-6 py-2 rounded-lg mt-6 flex gap-4 items-center'>
                                                    Shop Now 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[45%] relative rounded-lg h-full '>
                        <img src={banner2} className='h-full w-full rounded-2xl' alt="" />
                        <div className='absolute top-0 h-full left-0 px-6 flex justify-center items-center '>
                            <div>
                                <h1 className='text-3xl font-bold'>Utensils</h1>
                                <p className='text-xl font-normal mt-6'>Get 20% off</p>
                                <div className='flex  w-full'>
                                    <button className='bg-black text-white text-xl font-semibold px-6 py-2 rounded-lg mt-6 flex gap-4 items-center'>
                                                    Shop Now 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-28'>
                <PopularProducts />
            </div>
        </div>
    );
}

export default Home;
