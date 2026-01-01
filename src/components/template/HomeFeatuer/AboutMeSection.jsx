import Form from '../../modules/Form/Form'

import { TiTick } from "react-icons/ti";
import { AiOutlinePhone } from "react-icons/ai";
import { CgMail } from "react-icons/cg";


function AboutMeSection() {
    return (
        <div className=" h-[screen] md:pb-15 px-5 md:px-24 w-full ">
            <div
                data-aos="zoom-in"
                className="flex flex-col xl:flex-row gap-x-0 md:gap-x-5 gap-y-1 md:gap-y-5 justify-center items-center mx-auto w-[95%] md:w-[90%] py-5 bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md"
            >

                <div className="w-[90%] lg:w-[90%] xl:w-[60%] mx-5">
                    <div className="w-full flex flex-col gap-y-2 justify-center items-start">

                        <p className='text-zinc-300 dark:text-gray-400'>درباره من</p>

                        <h2 className='text-white text-2xl mb-4'> <span className='text-slate-500 dark:text-green-900'>راه حل های حرفه ای</span> برای محصولات</h2>

                        <p className='text-zinc-300 dark:text-gray-400 text-md'>
                            راه‌حل‌های حرفه‌ای برای محصولات، فراتر از معرفی ویژگی‌های ساده، مستقیماً بر حل چالش‌های پیچیده کسب‌وکارها متمرکز هستند. این راه‌حل‌ها با قابلیت یکپارچه‌سازی بدون دردسر با سیستم‌های موجود و مقیاس‌پذیری همراه با رشد کسب‌وکار، طراحی شده‌اند. علاوه بر این، ارائه پشتیبانی تخصصی، مشاوره مستمر و خدمات آموزشی، تضمین می‌کند که مشتریان بتوانند حداکثر بازدهی و ارزش را از محصول دریافت کنند.
                        </p>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-5 justify-between items-center *:flex *:gap-x-1 my-4 w-full ">
                            <div className="">
                                <TiTick className='text-green-900 text-xl' />
                                <span className='text-white'>برندینگ و طراحی</span>
                            </div>

                            <div className="">
                                <TiTick className='text-green-900 text-xl' />
                                <span className='text-white'>طراحی سایت</span>
                            </div>

                            <div className="">
                                <TiTick className='text-green-900 text-xl' />
                                <span className='text-white'>دیجیتال مارکتینگ</span>
                            </div>

                            <div className="">
                                <TiTick className='text-green-900 text-xl' />
                                <span className='text-white'>طراحی محصول</span>
                            </div>

                        </div>

                        <div className="flex items-start md:items-center justify-start gap-x-5 w-full mx-2 mt-4 *:flex flex-col md:flex-row *:items-center *:justify-center *:gap-x-2 gap-y-3 py-2 mb-5">

                            <div className="">
                                <CgMail className='text-4xl text-white dark:text-gray-400 bg-slate-600 dark:bg-green-900 rounded-full m-1 p-1' />
                                <div className="">
                                    <p className='text-zinc-300 dark:text-gray-400 mb-1'>ایمیل</p>
                                    <h2 className='text-white'>mohsenical.web@gmail.com</h2>
                                </div>
                            </div>

                            <div className="">
                                <AiOutlinePhone className='text-4xl text-white dark:text-gray-400 bg-slate-600 dark:bg-green-900 rounded-full m-1 p-1' />
                                <div className="">
                                    <p className='text-zinc-300 dark:text-gray-400 mb-1'>تماس بگیرید</p>
                                    <h2 className='text-white'>0914-545-0730</h2>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="w-[95%] lg:w-[90%] xl:w-[40%] mx-5 rounded-xl overflow-hidden">
                    <img src="/Image/AboutAvatar.jpg" className=" mx-auto object-contain object-fill" alt="Avatar" />
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection