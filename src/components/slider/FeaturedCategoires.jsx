import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../../assets/category-atta-rice-dal.jpg';
import img2 from '../../assets/category-dairy-bread-eggs.jpg';
import img3 from '../../assets/category-cleaning-essentials.jpg';
import img4 from '../../assets/category-baby-care.jpg';
import img5 from '../../assets/category-tea-coffee-drinks.jpg';
import img6 from '../../assets/Choclates.png';
import img7 from '../../assets/ColdDrinks.png';
import img8 from '../../assets/vegitables.png';

const FeaturedCategories = () => {
  const sliderRef = useRef(null);

  const products = [
    { img: img1, text: 'Atta, Rice & More' },
    { img: img2, text: 'Dairy, Bread & Eggs' },
    { img: img3, text: 'Cleaning Essentials' },
    { img: img4, text: 'Baby care products' },
    { img: img5, text: 'Tea & Coffees' },
    { img: img6, text: 'Chocolates' },
    { img: img7, text: 'Cold drinks' },
    { img: img8, text: 'Fresh Vegetables' },
  ];

  const NextArrow = () => {
    return (
      <div onClick={() => sliderRef.current.slickNext()} className="cursor-pointer bg-gray-300 p-2 rounded-full">
        <FaChevronRight className="text-3xl text-black" />
      </div>
    );
  };

  const PrevArrow = () => {
    return (
      <div onClick={() => sliderRef.current.slickPrev()} className="cursor-pointer bg-gray-300 p-2 rounded-full">
        <FaChevronLeft className="text-3xl text-black" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl font-bold uppercase'>Featured Categories</h1>
        <div className='flex space-x-2'>
          <PrevArrow />
          <NextArrow />
        </div>
      </div>
      <div className='my-10 relative'>
        <Slider ref={sliderRef} {...settings}>
          {products.map((item, index) => (
            <div key={index} className='h-72 border-gray-300 border-[2px] border-solid rounded-lg px-6 py-6'>
              <div className='w-full flex justify-center'>
                <img className='w-40 h-40' src={item.img} alt={item.text} />
              </div>
              <h1 className='text-xl text-gray-600 mt-10 font-normal text-center'>{item.text}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedCategories;
