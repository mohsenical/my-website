import React from 'react'

import { IoLocationSharp } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CgMail } from "react-icons/cg";


function Footer() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center w-full mt-10 py-10 px-5 bg-white dark:bg-black text-white'>

            <div className="flex flex-col gap-y-4 py-4 px-5 w-[90%] mb-5 md:w-[30%] h-full">
                <div className="">
                    <h1 className='text-xl'>محسن پیغامی</h1>
                </div>

                <p className='w-full md:w-[90%] text-gray-400 mr-5'>
                    راه‌حل‌های حرفه‌ای برای محصولات، فراتر از معرفی ویژگی‌های ساده، مستقیماً بر حل چالش‌های پیچیده کسب‌وکارها متمرکز هستند. این راه‌حل‌ها با قابلیت یکپارچه‌سازی بدون دردسر با سیستم‌های موجود و مقیاس‌پذیری همراه با رشد کسب‌وکار، طراحی شده‌اند.
                </p>
            </div>

            <div className="flex flex-col gap-y-4 py-4 px-5 w-[90%] mb-5 md:w-[30%] h-full">
                <h2 className='text-xl'>لینک های سریع</h2>

                <ul className=' flex flex-col gap-y-4 *:text-gray-400 mr-4'>
                    <li className=''>
                        <div className="flex justify-start items-center gap-x-2">
                            <div className='w-[5px] h-[5px] bg-green-900 rounded-full'></div>
                            <a>معرفی</a>
                        </div>
                    </li>
                    <li className=''>
                        <div className="flex justify-start items-center gap-x-2">
                            <div className='w-[5px] h-[5px] bg-green-900 rounded-full'></div>
                            <a>خدمات</a>
                        </div>
                    </li>
                    <li className=''>
                        <div className="flex justify-start items-center gap-x-2">
                            <div className='w-[5px] h-[5px] bg-green-900 rounded-full'></div>
                            <a>پروژه ها</a>
                        </div>
                    </li>
                    <li className=''>
                        <div className="flex justify-start items-center gap-x-2">
                            <div className='w-[5px] h-[5px] bg-green-900 rounded-full'></div>
                            <a>مهارت ها</a>
                        </div>
                    </li>
                    <li className=''>
                        <div className="flex justify-start items-center gap-x-2">
                            <div className='w-[5px] h-[5px] bg-green-900 rounded-full'></div>
                            <a>تماس</a>
                        </div>
                    </li>
                    <li className=''>
                        <div className="flex justify-start items-center gap-x-2">
                            <div className='w-[5px] h-[5px] bg-green-900 rounded-full'></div>
                            <a>مقالات</a>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-y-4 py-4 px-5 w-[90%] mb-5 md:w-[30%] h-full">
                <h2 className='text-xl'>دسترسی ها</h2>

                <div className="flex gap-x-2 items-center justify-start mr-5">
                    <IoLocationSharp className='text-2xl text-green-700' />
                    <sapn className="text-md text-gray-400">ایران / ارومیه</sapn>
                </div>

                <div className="flex gap-x-2 items-center justify-start mr-5">
                    <FiPhone className='text-2xl text-green-700' />
                    <sapn className="text-md text-gray-400">mohsenical.web@gmail.com</sapn>
                </div>

                <div className="flex gap-x-2 items-center justify-start mr-5">
                    <CgMail className='text-2xl text-green-700' />
                    <sapn className="text-md text-gray-400">0914-545-0730</sapn>
                </div>
            </div>

        </div>
    )
}

export default Footer