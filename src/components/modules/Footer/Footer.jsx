import React from 'react'

import { IoLocationSharp } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { menuItem } from '../../../Data/menuData';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-start md:items-start w-full mt-10 py-5 px-5 bg-white dark:bg-black text-white'>

            <div className="flex flex-col gap-y-4 py-4 px-5 w-[90%] mb-5 md:w-[30%] h-full">
                <div className="">
                    <h1 className='text-xl dark:text-white/80 text-gray-900 danpm run devrk:text-white '>محسن پیغامی</h1>
                </div>

                <p className='w-full md:w-[90%] dark:text-gray-400 text-black mr-5'>
                    راه‌حل‌های حرفه‌ای برای محصولات، فراتر از معرفی ویژگی‌های ساده، مستقیماً بر حل چالش‌های پیچیده کسب‌وکارها متمرکز هستند. این راه‌حل‌ها با قابلیت یکپارچه‌سازی بدون دردسر با سیستم‌های موجود و مقیاس‌پذیری همراه با رشد کسب‌وکار، طراحی شده‌اند.
                </p>
            </div>

            <div className="flex flex-col gap-y-4 py-4 px-5 w-[90%] mb-5 md:w-[30%] h-full">
                <h2 className='text-xl dark:text-white/80 text-gray-900 danpm run devrk:text-white '>لینک های سریع</h2>

                <ul className=' flex flex-col gap-y-4 mr-4 *:dark:text-gray-400 *:text-black *:hover:dark:text-white *:hover:text-gray-400 *:transition-all'>

                    {
                        menuItem.map(menu => (
                            <li key={menu.id} className=''>
                                <div className="flex justify-start items-center gap-x-2">
                                    <div className='w-[5px] h-[5px] bg-slate-700 dark:bg-green-900 rounded-full'></div>
                                    <Link to={menu.href}>{menu.title}</Link>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>

            <div className="flex flex-col gap-y-4 py-4 px-5 w-[90%] mb-5 md:w-[30%] h-full">
                <h2 className='text-xl dark:text-white/80 text-gray-900 danpm run devrk:text-white '>دسترسی ها</h2>

                <div className="flex gap-x-2 items-center justify-start mr-5">
                    <IoLocationSharp className='text-2xl text-slate-700 dark:text-green-700' />
                    <sapn className="text-md text-black dark:text-gray-400">ایران / ارومیه</sapn>
                </div>

                <div className="flex gap-x-2 items-center justify-start mr-5">
                    <CgMail className='text-2xl text-slate-700 dark:text-green-700' />
                    <sapn className="text-md text-black dark:text-gray-400">mohsenical.web@gmail.com</sapn>
                </div>

                <div className="flex gap-x-2 items-center justify-start mr-5">
                    <AiOutlinePhone className='text-2xl text-slate-700 dark:text-green-700' />
                    <sapn className="text-md text-black dark:text-gray-400">0914-545-0730</sapn>
                </div>
            </div>

        </div>
    )
}

export default Footer