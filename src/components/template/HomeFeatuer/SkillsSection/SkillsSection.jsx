import React from 'react'
import HeaderSctionBody from '../../../modules/HeaderSctionBody/HeaderSctionBody'

import { FaReact } from "react-icons/fa6";

function SkillsSection() {
    return (
        <div className=" h-[screen] my-10 py-10 px-20 bg-white dark:bg-black w-full ">

            <HeaderSctionBody title="مهارت های من" desc="مهارت ها و تکنولوژی ها" />

            <div className="flex gap-x-5 justify-center items-center h-[30rem] mx-auto w-[80%] bg-zinc-900 rounded-2xl  overflow-hidden">
                <div className=" w-[40%] mx-10">
                    <div className="w-full flex flex-col gap-y-3 justify-center items-start">
                        <h3 className='text-xl text-gray-400'>مهارت‌های من</h3>
                        <h2 className='text-2xl text-white mb-4'> <span className='text-green-700'>کاوش مهارت‌های </span> محبوب </h2>

                        <p className=' text-gray-400'>
                            در دنیای پررقابت امروز، مهارت‌های تخصصی و تجربه عملی، کلید موفقیت در هر زمینه‌ای محسوب می‌شوند. من با بهره‌گیری از دانش به‌روز و خلاقیت بی‌پایان، همواره در پی خلق راهکارهای نوآورانه و مؤثر هستم.
                        </p>

                        <p className=' text-gray-400'>
                            تعهد به کیفیت، دقت در اجرا و توجه به جزئیات، اصولی هستند که در تمام مراحل کارم رعایت می‌کنم تا بهترین نتایج ممکن را برای پروژه‌ها به ارمغان آورم.
                        </p>
                    </div>

                </div>

                <span className='w-[2px] h-[90%] bg-gray-200/50'></span>

                <div className="grid grid-cols-4 gap-y-5 justify-center items-center w-[60%] mx-5">
                    <div className="flex justify-center items-center ">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center ">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center ">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center ">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center ">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center ">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center ">
                        <div className="flex flex-col gap-y-3 justify-center items-center bg-zinc-800 py-5 px-5 rounded-xl  ">
                            <FaReact className='text-7xl text-green-900' />

                            <p>React.js</p>

                            <div className="flex justify-center items-center w-[90%] h-5">100%</div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center ">
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