// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../style/swiper.css';

// import required modules
import { Autoplay ,Pagination } from 'swiper/modules';


import { IoMdTime } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";

import { articlesData } from '../../Data/articlesData';

function BlogsSection() {
    return (
        <div data-aos="zoom-in" className=" h-[screen] pb-5 px-5 md:px-20 w-full ">

            <div className='flex flex-col xl:flex-row gap-x-0 md:gap-x-5 gap-y-5 justify-center items-center mx-auto w-[95%] md:w-[90%] py-4 md:py-5 lg:py-10 bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md'>
                <Swiper
                    rewind={true}
                    loop={true}
                    autoplay={{ delay: 1500 }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >


                    {
                        articlesData.map(article => (
                            <SwiperSlide key={article.id}>

                                <div className="flex flex-col lg:flex-row justify-center items-center w-[90%] mx-auto rounded-xl overflow-hidden border border-white/20">

                                    <div className="flex flex-col justify-center items-center h-full w-full">
                                        <img src={article.image} alt="Next.js" className='object-contain object-center w-full h-full' />
                                    </div>


                                    <div className="flex flex-col justify-between items-center w-full h-[20rem] ">
                                        <div className="flex flex-col gap-y-5 w-full h-[75%] p-3">
                                            <h3 className='text-white text-xl '>{article.title}</h3>
                                            <p className='text-gray-400 line-clamp-5 mb-0'>
                                                {article.disc}
                                            </p>
                                            <button className='w-full md:w-[20%] bg-slate-700 dark:bg-green-900 p-3 rounded-2xl text-white dark:text-gray-400 hover:text-zinc-400 dark:hover:text-white transition-all cursor-pointer'>
                                                <a href="/" className=''>خواندن مقاله</a>
                                            </button>
                                        </div>

                                        <div className="flex gap-x-20 justify-start items-center *:flex *:justify-center *:items-center *:gap-x-2 h-[15%] w-full py-5 px-5">
                                            <div className="">
                                                <IoMdTime className='text-white text-xl' />
                                                <span className='text-md mt-1 text-gray-400'>بدون دیدگاه</span>
                                            </div>
                                            <div className="">
                                                <BiMessageSquareDetail className='text-white text-xl' />
                                                <span className='text-md mt-1 text-gray-400'>{article.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default BlogsSection




