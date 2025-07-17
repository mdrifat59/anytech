import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import custom from '/image/customer-focous.jpg'
import adapable from '/image/adapable.jpg'
import ready from '/image/ready.png'
import safe from '/image/safe.jpg'

const Carousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            {/* THUMBS GALLERY (mySwiper) - Now placed ABOVE the main slider */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper max-w-1200  box-border  mx-auto "
            >
                <SwiperSlide className="w-1/4 h-full group py-32">
                    <button className='font-Montserrat-Semibold text-lg group-[.swiper-slide-thumb-active]:bg-[#b9d9ff] px-[48px] py-[8px] text-[#1f80f0] cursor-pointer rounded-full'>Customer focused</button>
                </SwiperSlide>
                <SwiperSlide className="w-1/4 h-full group py-32">
                    <button className='font-Montserrat-Semibold text-lg group-[.swiper-slide-thumb-active]:bg-[#b9d9ff] px-[48px] py-[8px] text-[#1f80f0] cursor-pointer rounded-full'>Agile and adaptable</button>
                </SwiperSlide>
                <SwiperSlide className="w-1/4 h-full group py-32">
                    <button className='font-Montserrat-Semibold text-lg group-[.swiper-slide-thumb-active]:bg-[#b9d9ff] px-[48px] py-[8px] text-[#1f80f0] cursor-pointer rounded-full'>Compliance ready</button>
                </SwiperSlide>
                <SwiperSlide className="w-1/4 h-full group py-32">
                    <button className='font-Montserrat-Semibold text-lg group-[.swiper-slide-thumb-active]:bg-[#b9d9ff] px-[48px] py-[8px] text-[#1f80f0] cursor-pointer rounded-full'> Secure and safe</button>
                </SwiperSlide>


            </Swiper>

            {/* MAIN SLIDER (mySwiper2) - Now placed BELOW the thumbnail gallery */}
            <Swiper
                spaceBetween={10}
                navigation={false}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs, Autoplay]}
                className="mySwiper2  max-w-1200 mx-auto"
            >
                <SwiperSlide className='py-64'>
                    <div className="grid grid-cols-2 gap-[32px] p-24">
                        <div >
                            <h6 className='font-Montserrat-Bold text-md leading-[1.5px] tracking-[2.56px] text-[#1f80f0] uppercase'>Customer focused</h6>
                            <h3 className='font-Montserrat-Semibold text-[40px] leading-[120%]  text-[#0b305b] my-[32px]'>Purpose-built financial services</h3>
                            <p className='w-[503px] font-Montserrat-Bold text-base leading-[160%]  text-[#164377] '> Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.</p>
                            <p className='w-[510px] font-Montserrat-Reguler text-base leading-[160%]  text-[#164377] mt-[32px]'> Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.</p>
                        </div>
                        <div>
                            <img src={custom} className='rounded-2xl h-[425px]' alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='py-64'>
                    <div className="grid grid-cols-2 gap-[32px] p-24">
                        <div >
                            <h6 className='font-Montserrat-Bold text-md leading-[1.5px] tracking-[2.56px] text-[#1f80f0] uppercase'>Agile and adaptable</h6>
                            <h3 className='font-Montserrat-Semibold text-[40px] leading-[120%]  text-[#0b305b] my-[32px]'>Agile and adaptable for growth</h3>
                            <p className='w-[503px] font-Montserrat-Bold text-base leading-[160%]  text-[#164377] '> Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.</p>
                            <p className='w-[510px] font-Montserrat-Reguler text-base leading-[160%]  text-[#164377] mt-[32px]'> Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.</p>
                        </div>
                        <div>
                            <img src={adapable} className='rounded-2xl h-[425px]' alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='py-64'>
                    <div className="grid grid-cols-2 gap-[32px] p-24">
                        <div >
                            <h6 className='font-Montserrat-Bold text-md leading-[1.5px] tracking-[2.56px] text-[#1f80f0] uppercase'>Compliance ready</h6>
                            <h3 className='font-Montserrat-Semibold text-[40px] leading-[120%]  text-[#0b305b] my-[32px]'>Manage compliance with ease</h3>
                            <p className='w-[503px] font-Montserrat-Bold text-base leading-[160%]  text-[#164377] '>  Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.</p>
                            <p className='w-[510px] font-Montserrat-Reguler text-base leading-[160%]  text-[#164377] mt-[32px]'> Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.</p>
                        </div>
                        <div>
                            <img src={ready} className='rounded-2xl h-[425px]' alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='py-64'>
                    <div className="grid grid-cols-2 gap-[32px] p-24">
                        <div >
                            <h6 className='font-Montserrat-Bold text-md leading-[1.5px] tracking-[2.56px] text-[#1f80f0] uppercase'> Secure and safe</h6>
                            <h3 className='font-Montserrat-Semibold text-[40px] leading-[120%]  text-[#0b305b] my-[32px]'>Highly secure and safe</h3>
                            <p className='w-[503px] font-Montserrat-Bold text-base leading-[160%]  text-[#164377] '>  Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.</p>
                            <p className='w-[510px] font-Montserrat-Reguler text-base leading-[160%]  text-[#164377] mt-[32px]'> Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.</p>
                        </div>
                        <div>
                            <img src={safe} className='rounded-2xl h-[425px]' alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Carousel;