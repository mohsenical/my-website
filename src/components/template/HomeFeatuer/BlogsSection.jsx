// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../../style/swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

function BlogsSection() {
    return (
        <div className=" h-[screen] pb-5 px-5 md:px-20 w-full ">

            <div className='flex flex-col xl:flex-row gap-x-0 md:gap-x-5 gap-y-5 justify-center items-center mx-auto w-[95%] md:w-[90%] py-4 md:py-5 lg:py-10 bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="">

                            <div className="flex gap-x-3 justify-center items-center w-[90%] h-[24rem] mx-auto ">
                                <div className="w-full h-[20rem] bg-red-600"></div>
                                <div className="w-full h-[20rem] bg-red-500"></div>
                            </div>

                        </div>
                    </SwiperSlide>


                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default BlogsSection




