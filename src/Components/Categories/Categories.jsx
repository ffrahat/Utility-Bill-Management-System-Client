import React from 'react';
import MyContainar from '../../Layouts/MyContainar';
import { IoIosArrowForward } from 'react-icons/io';
import electricyImg from '../../assets/eco-house.png'
import GasImg from '../../assets/gas-pump.png'
import waterImg from '../../assets/water-tap.png'
import internetImg from '../../assets/freelance.png'
import { FaArrowRight } from 'react-icons/fa';

const Categories = () => {
    return (
        <div className='my-10 py-10 '>
            <div className='flex py-5 items-center justify-between mb-5'>
                <div>
                    <p className='font-semibold text-2xl'>Categories</p>
                </div>
                <div>
                    <button className='text-[18px] flex items-center gap-2 cursor-pointer'>View All <span><IoIosArrowForward /></span></button>
                </div>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-10 '>
                <div className='border border-gray-300 hover:bg-gray-100 h-[100px] md:h-[150px]  hover:shadow-xl  rounded-md flex items-center justify-center flex-col gap-3 transition duration-300 cursor-pointer'>
                    <div className='h-7 w-7 md:h-10 md:w-10 '>
                        <img className='w-full h-full mx-auto object-cover' src={electricyImg} alt="" />
                    </div>
                    <p className='font-semibold'>Electricity</p>
                </div>
                <div className='border border-gray-300 hover:bg-gray-100 h-[100px] md:h-[150px]  hover:shadow-xl  rounded-md flex items-center justify-center flex-col gap-3 transition duration-300 cursor-pointer'>
                    <div className='h-7 w-7 md:h-10 md:w-10 '>
                        <img className='w-full h-full mx-auto object-cover' src={GasImg} alt="" />
                    </div>
                    <p className='font-semibold'>Gas</p>
                </div>
                <div className='border border-gray-300 hover:bg-gray-100 h-[100px] md:h-[150px]  hover:shadow-xl  rounded-md flex items-center justify-center flex-col gap-3 transition duration-300 cursor-pointer'>
                    <div className='h-7 w-7 md:h-10 md:w-10 '>
                        <img className='w-full h-full mx-auto object-cover' src={waterImg} alt="" />
                    </div>
                    <p className='font-semibold'>Water</p>
                </div>
                <div className='border border-gray-300 hover:bg-gray-100 h-[100px] md:h-[150px]  hover:shadow-xl  rounded-md flex items-center justify-center flex-col gap-3 transition duration-300 cursor-pointer'>
                    <div className='h-7 w-7 md:h-10 md:w-10 '>
                        <img className='w-full h-full mx-auto object-cover' src={internetImg} alt="" />
                    </div>
                    <p className='font-semibold'>Internet</p>
                </div>

                <div className='border border-gray-100 bg-gray-200 h-[100px] md:h-[150px] shadow-xl hover:shadow-xl  rounded-md flex items-center justify-center flex-col gap-3 transition duration-300 cursor-pointer'>
                    <div className='h-7 w-7 md:h-10 md:w-10 '>
                        <p className='font-semibold flex items-center gap-3 w-full'> View All <span><FaArrowRight /></span></p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Categories;