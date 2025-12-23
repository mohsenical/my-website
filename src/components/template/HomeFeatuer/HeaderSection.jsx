

function HeaderSection() {
  return (
    <>
      <div className="flex justify-center h-[45rem] w-full px-0 md:px-2 lg:px-15 xl:px-30 relative bg-black overflow-hidden">

        <div className="flex flex-col justify-center items-center md:h-[38rem] lg:h-[40rem] xl:h-[45rem] w-[90%] md:w-[58%] mt-15 pt-75 0 bg-[url(/Image/AvatarBackground.png)] bg-no-repeat bg-center bg-cover md:bg-none">
          <div className="flex flex-col justify-center items-center md:mt-20 space-y-2 backdrop-blur-lg bg-black/50 p-5 rounded-2xl">

            <div className="space-y-2 px-2 py-4 border-r-2 border-r-green-900 lg:px-2">
              <h1 className='text-xl lg:text-2xl xl:text-3xl text-zinc-400'>محسن پیغامی</h1>
              <h2 className='text-md lg:text-xl xl:text-xl text-zinc-400'>متخصص فرانت اند / برنامه نویس بلاک چین (سالیدیتی)</h2>
            </div>

            <div className="flex gap-5 mt-5  *:flex *:justify-center *:items-center *:px-5 *:py-2 *:text-xl *:bg-green-900 *:text-zinc-400 *:rounded-xl *:hover:text-white *:transition-colors *:cursor-pointer">
              <button className='text-xl lg:text-2xl xl:text-xl'>نمونه کار</button>
              <button className='text-md lg:text-xl xl:text-xl'>تماس</button>
            </div>

          </div>
        </div>

        <div className="hidden md:block flex justify-center relative items-start md:w-[40%]">
          <img src="/Image/AvatarBackground.png" className="absolute bottom-0 ml-15 left-0 w-full h-[80%] max-w-sm mx-auto object-cover object-center" alt="" /></div>
      </div>
    </>
  )
}

export default HeaderSection
