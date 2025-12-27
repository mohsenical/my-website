import React from 'react'
import HeaderSctionBody from '../../../modules/HeaderSctionBody/HeaderSctionBody'

import { FaReact } from "react-icons/fa6";

function SkillsSection() {
    return (
        <div className=" h-[screen] my-10 py-10 px-5 md:px-20 bg-white dark:bg-black w-full ">

            <HeaderSctionBody title="مهارت های من" desc="مهارت ها و تکنولوژی ها" />

            <div className="flex flex-col md:flex-row gap-x-0 md:gap-x-5 gap-y-10 justify-center items-center mx-auto w-[95%] md:w-[80%] py-10 bg-zinc-900 rounded-2xl overflow-hidden">

                <div className="w-[90%] md:w-[40%] mx-10">
                    <div className="w-full flex flex-col gap-y-3 justify-center items-start">
                        <h3 className='text-xl text-gray-400'>مهارت‌های من</h3>
                        <h2 className='text-2xl text-white mb-4'> <span className='text-green-700'>کاوش مهارت‌های </span> محبوب </h2>

                        <p className=' text-gray-400 mb-4'>
                            در دنیای پررقابت امروز، مهارت‌های تخصصی و تجربه عملی، کلید موفقیت در هر زمینه‌ای محسوب می‌شوند. من با بهره‌گیری از دانش به‌روز و خلاقیت بی‌پایان، همواره در پی خلق راهکارهای نوآورانه و مؤثر هستم.
                        </p>

                        <p className=' text-gray-400'>
                            تعهد به کیفیت، دقت در اجرا و توجه به جزئیات، اصولی هستند که در تمام مراحل کارم رعایت می‌کنم تا بهترین نتایج ممکن را برای پروژه‌ها به ارمغان آورم.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 justify-center items-center w-[90%] md:w-[65%]   mx-2 md:mx-5">

                    <div className="flex justify-center items-center w-[25%]">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center w-[25%]">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center w-[25%]">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center w-[25%]">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center w-[25%]">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center w-[25%]">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center w-[25%]">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center w-[25%]">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SkillsSection