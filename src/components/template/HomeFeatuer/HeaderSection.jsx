import React from 'react'

import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

function HeaderSection() {
  return (
    <>
      <div className="flex gap-2 h-[45rem] lg:h-[40rem] xl:h-[45rem] w-full px-0 lg:px-2 xl:px-30 relative bg-black">

        <div className="flex flex-col justify-center items-start md:h-[38rem] lg:h-[40rem] xl:h-[45rem] w-[90%] md:w-[58%] mx-auto mt-5 pt-50 px-15 lg:px-10 lx:px-15 bg-[url(/Image/AvatarBackground.png)] bg-no-repeat bg-center bg-cover md:bg-none">
          <div className="flex flex-col justify-center items-center md:mt-20 space-y-2 backdrop-blur-lg bg-black/50 p-5 rounded-2xl">

            <div className="space-y-2 px-2 py-4 border-r-2 border-r-green-900 lg:px-2">
              <h1 className='text-xl lg:text-2xl xl:text-3xl text-zinc-400'>محسن پیغامی</h1>
              <h2 className='text-md lg:text-xl xl:text-xl text-zinc-400'>متخصص فرانت اند / برنامه نویس بلاک چین (سالیدیتی)</h2>
            </div>

            <div className="flex gap-5 mt-5  *:flex *:justify-center *:items-center *:px-5 *:py-2 *:text-xl *:bg-green-900 *:text-zinc-400 *:rounded-xl">
              <button className='text-xl lg:text-2xl xl:text-3xl'>نمونه کار</button>
              <button className='text-md lg:text-xl xl:text-xl'>تماس</button>
            </div>

          </div>

          
        </div>
      </div>
    </>
  )
}

export default HeaderSection
