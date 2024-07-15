import React, { useEffect } from 'react'
import img from '../../assets/smaple-product.png'
import rating from '../../assets/rating.png'
const PopularProducts = () => {
    
    const supermarketProducts = [
  {
    category: "Packaged Food",
    name: "Spaghetti",
    price: 249, // converted to INR
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIj-tg-OanEq9gN69zv9X7zsZ06UFDtarpzS_1b2akZxxM-vlFt2yuVYMUU3Mv3VjWgQM4MfMuf5vS0gAV-g8AfXo5QGTw70uHTmfEVKdiBGaeNBTuB-TWNQ"
  },
  {
    category: "Packaged Food",
    name: "Rice",
    price: 124, // converted to INR
    img: "https://m.media-amazon.com/images/I/81DAYuKsmcL.jpg"
  },
  {
    category: "Cleaning Essentials",
    name: "Dish Soap",
    price: 332, // converted to INR
    img: "https://m.media-amazon.com/images/I/71iOEZNMCEL.jpg"
  },
  {
    category: "Cleaning Essentials",
    name: "Laundry Detergent",
    price: 499, // converted to INR
    img: "https://www.bigbasket.com/media/uploads/p/l/264009_15-tide-plus-detergent-washing-powder-extra-power-jasmine-rose.jpg"
  },
  {
    category: "Chocolates",
    name: "Milk Chocolate Bar",
    price: 166, // converted to INR
    img: "https://5.imimg.com/data5/SELLER/Default/2022/1/LK/MY/KJ/146174935/milk-bar-chocolates.png"
  },
  {
    category: "Chocolates",
    name: "Dark Chocolate Bar",
    price: 207, // converted to INR
    img: "https://m.media-amazon.com/images/I/41xMZSAUG+L.jpg"
  },
  {
    category: "Packaged Food",
    name: "Canned Beans",
    price: 83, // converted to INR
    img: "https://images-cdn.ubuy.co.in/6353230f4c1f3038c80de097-van-camp-39-s-original-baked-beans.jpg"
  },
  {
    category: "Cleaning Essentials",
    name: "Glass Cleaner",
    price: 233, // converted to INR
    img: "https://m.media-amazon.com/images/I/61FqdrSrXqL.jpg"
  },
  {
    category: "Chocolates",
    name: "Chocolate Truffles",
    price: 416, // converted to INR
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsx7_gnt_2eJLoT4Ez1sqywN85dnMx0GZkg&s"
  },
  {
    category: "Packaged Food",
    name: "Instant Noodles",
    price: 49, // converted to INR
    img: "https://m.media-amazon.com/images/I/81NIk6HboaL.jpg"
  }
];

  return (
    <div className='my-12'>
        <div>
            <h1 className='text-4xl font-bold uppercase'>Popular Products</h1>
        </div>

        <div className='grid grid-cols-4 gap-10 my-6 ' >
            {
                supermarketProducts.map((products) => (
                    <div className='w-72 h-80 px-12   border-solid border-gray-600 cursor-pointer'>
                        <img src={products.img}  className='w-full h-40' alt="" />
                        <h3 className='text-xl font-semibold text-center my-2'>{products.name}</h3>
                        <div className='flex justify-center my-2'>
                            <img className='h-6' src={rating} alt="" />
                        </div>
                        <div className='flex justify-between items-center px-4 my-4 '>
                            <p className='text-lg font-medium'>{products.price}</p>
                            <button className='text-lg font-medium text-white bg-green-500 px-4  rounded-2xl'>ADD +</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PopularProducts