import React from 'react'

import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

function HeaderSection() {
  return (
    <>
      <div className=" bg-black min-h-screen md:min-h-[45rem] flex justify-center rounded-b-[3%]">
        <div className=" flex items-center justify-center flex-col max-h-screen md:w-[80%] mt-2 lg:w-[55%] xl:w-[45%] z-0 bg-[url(/Image/bgAvatar.png)] bg-cover  md:bg-none">
          <div className="flex flex-col mt-50 space-y-1 max-w-[80%] md:max-w-[55%] z-10">

            <h2 className='text-2xl text-white md:text-zinc-600 '>سلام من</h2>
            <h1 className='text-4xl text-green-700 mr-3 py-3 px-5 bg-black/50 w-[16rem] rounded-2xl '>محسن پیغامی</h1>
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
        </div>

        <div className="mt-[3rem] hidden lg:block lg:w-[45%] xl:w-[40%] h-[44rem] bg-[url(/Image/bgAvatar.png)] bg-cover">

        </div>
      </div>
    </>
  )
}

export default HeaderSection