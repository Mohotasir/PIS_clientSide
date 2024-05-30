import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css'
import img1 from '../../assets/nb1.avif'
import img2 from '../../assets/nb2.png'
import img3 from '../../assets/nb3.png'
import img4 from '../../assets/comparison-chart-infographic-design_23-2148551307.avif'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className="bg-cover bgClr bg-no-repeat"  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))` }}>
        <div className='lg:h-[80vh] max-w-screen-xl mx-auto container py-6 md:py-0  flex flex-col-reverse items-center justify-center md:flex-row gap-6  '>
            <div className='md:w-1/2 poppin' >
                <div className='text-center md:text-left'>
                    <h1 className='text-3xl md:text-4xl font-semibold text-white'> <span className='text-orange-500'>Discover Your Alternatives:</span> A Comprehensive Product Information Platform</h1>
                    <p className='text-sm  py-3 font-light text-gray-300'>Empowering you to discover alternatives that suit your needs and preferences.</p>
                    <Link to="/allpost" className='btn bgClr text-orange-500 px-8  outline-none border-none'>Find Your Answer</Link>
                </div>
            </div>
            <div className='w-11/12  md:w-1/2 m-8  '>
                <Swiper

                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper rounded-2xl h-[30vh] md:h-[50vh] "
                >

                    <SwiperSlide className='bg-cover bg-no-repeat' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))` }}>
                            <div className='w-full'>
                                <img className='w-full' src={img1} alt="" />
                            </div>    
                    </SwiperSlide>
                    <SwiperSlide className='bg-cover bg-no-repeat' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))` }}>
                            <div className='w-full'>
                                <img className='w-full' src={img2} alt="" />
                            </div>    
                    </SwiperSlide>
                    <SwiperSlide className='bg-cover bg-no-repeat' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))` }}>
                            <div className='w-full'>
                                <img className='w-full' src={img3} alt="" />
                            </div>    
                    </SwiperSlide>
                    <SwiperSlide className='bg-cover bg-no-repeat' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))` }}>
                            <div className='w-full'>
                                <img className='w-full' src={img4} alt="" />
                            </div>    
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
        
            <div className='flex flex-wrap bgClr2 md:w-[50%] mx-auto text-white items-center justify-between'>
            <p className='btn  rounded-none outline-none border-none  bgClr2 text-white text-lg  font-sns '>ALL</p>
                <p className='btn  rounded-none outline-none border-none  bgClr2 text-white text-lg  font-sns '>Technology</p>
                <p className='btn  rounded-none outline-none border-none bgClr2 text-white text-lg  font-sns '>Food</p>
                <p className='btn  rounded-none outline-none border-none bgClr2 text-white text-lg  font-sns '>Medicine</p>
                <p className='btn  rounded-none outline-none border-none bgClr2 text-white text-lg  font-sns '>Education</p>
                <p className='btn  rounded-none outline-none border-none bgClr2 text-white text-lg  font-sns '>Job Market</p>
           
        </div>
        </div>
     

    );
};

export default Slider;