import React from 'react'

import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

function HeaderSection() {
  return (
    <>
      <div className=" bg-black min-h-[40rem] md:min-h-[45rem] flex justify-center items-center">
        <div className="flex items-center justify-center flex-col md:w-[35%]  ">
          <div className="flex flex-col space-y-1 md:pt-40 md:mr-50 max-w-[80%] md:max-w-[55%]">

            <h2 className='text-2xl text-zinc-600 '>سلام من</h2>
            <h1 className='text-4xl text-green-700 mr-3'>محسن پیغامی</h1>
            <h2 className='text-2xl text-zinc-600'>هستم .</h2>


            <p className='text-md text-zinc-600 mt-6 font-bold leading-6'>
              یک طراح سایت زبده، ترکیبی از خلاقیت هنری، مهارت فنی پیشرفته و درک عمیق از تجربه کاربری (UX/UI) است.
            </p>

            <div className="flex gap-4 mt-6">
              <button className='flex items-center justify-center py-3 px-3 gap-x-1 bg-green-700/100 text-white rounded-2xl cursor-pointer'>
                استخدام من
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button className='flex items-center justify-center py-3 px-3 gap-x-1 text-green-700 rounded-2xl cursor-pointer'>
                دانلود رزومه
                <MdOutlineKeyboardArrowLeft />
              </button>
            </div>

          </div>
        </div>
        <div className="hidden md:block w-[30%]"></div>
        <div className="hidden md:block w-[35%]"></div>
      </div>
    </>
  )
}

export default HeaderSection