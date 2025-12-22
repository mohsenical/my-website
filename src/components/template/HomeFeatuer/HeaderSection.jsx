import React from 'react'

import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

function HeaderSection() {
  return (
    <>
      <div className="min-h-[45rem] w-full px-30 bg-gray-300 dark:bg-zinc-900 border-b border-b-zinc-300 rounded-b-2xl ">
        <div className=" flex ">

          <div className="flex flex-col justify-center items-start space-y-1 h-[45rem] w-[50%] pt-50">

            <h2 className='text-2xl text-white md:text-zinc-600 '>سلام من</h2>
            <h1 className='text-4xl text-green-700 mr-3 py-3 px-5 rounded-2xl '>محسن پیغامی</h1>
            <h2 className='text-2xl text-white md:text-zinc-600'>هستم .</h2>

            <p className='text-md text-white md:text-zinc-600 mt-6 font-bold leading-6'>
              یک طراح سایت زبده، ترکیبی از خلاقیت هنری، مهارت فنی پیشرفته و درک عمیق از تجربه کاربری (UX/UI) است.
            </p>

            <div className="flex justify-center items-center md:justify-start gap-4 mt-10 md:mt-6">
              <button className='flex items-center justify-center py-3 px-3 gap-x-1 bg-lime-900 md:bg-green-700 text-white rounded-2xl cursor-pointer'>
                استخدام من
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button className='flex items-center justify-center py-3 px-3 gap-x-1 text-green-700 rounded-2xl cursor-pointer'>
                دانلود رزومه
                <MdOutlineKeyboardArrowLeft />
              </button>
            </div>
          </div>


          <div className="flex items-center justify-center w-[50%] h-[45rem]">
            <div className="w-[60%] h-[60%] pt-50 rounded-full border-4 border-green-900 bg-[url(/Image/Avatar.jpg)] bg-contain bg-cover bg-no-repeat"></div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HeaderSection



//   <div className=    z-10">





//   </div>