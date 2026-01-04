import { ReactTyped } from "react-typed"
import Button from "../modules/Button/Button"


function HeaderSection() {
  return (
    <>
      <div className="flex justify-center h-[95vh] w-full md:px-2 lg:px-15 xl:px-30 bg-white dark:bg-black shadow overflow-hidden">

        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center md:items-start md:h-[38rem] lg:h-[40rem] xl:h-[45rem] w-[100%] md:w-[58%] mt-15 pt-75 md:pt-50 bg-[url(/Image/AvatarBackgroundWhite.png)] dark:bg-[url(/Image/AvatarBackgroundDark.png)] bg-no-repeat bg-center bg-cover md:bg-none dark:md:bg-none">
          <div className="flex flex-col justify-center items-center md:mt-20 space-y-2 backdrop-blur-xl bg-white/40 dark:bg-black/50 p-5 rounded-2xl">

            <div className="w-[100%] border-r-2 border-r-sky-900 dark:border-r-green-700 lg:px-2">

              <ReactTyped className='mx-3 text-xl lg:text-2xl xl:text-3xl text-gray-900 dark:text-zinc-400'
                strings={["محسن پیغامی"]}
                typeSpeed={80}
                backSpeed={80}
              />

              <br />
              <br />

              <ReactTyped
                className='mx-3 text-md lg:text-xl xl:text-xl text-gray-700 dark:text-zinc-400'
                strings={[
                  "به سایت من خوش اومدید ❤",
                  "برنامه نویس طراحی سایت",
                  "متخصص فرانت اند و بک اند",
                ]}
                typeSpeed={80}
                backSpeed={80}
                attr="placeholder"
                loop
              >
                <input type="text" />
              </ReactTyped>

            </div>

            <div className="flex gap-5 mt-5  *:flex *:justify-center *:items-center ">
              <Button title="نمونه کار" />
              <Button title="تماس" />
            </div>

          </div>
        </div >

        <div className="hidden md:block ml-5 justify-center relative items-start md:w-[40%]">
          <img src="/Image/AvatarBackgroundDark.png" className="dark:block absolute bottom-0 ml-15 left-0 w-full h-[80%] max-w-sm mx-auto object-cover object-center" alt="Avatar" />
          <img src="/Image/AvatarBackgroundWhite.png" className="dark:hidden absolute bottom-0 ml-15 left-0 w-full h-[80%] max-w-sm mx-auto object-cover object-center" alt="Avatar" />
        </div>
      </div >
    </>
  )
}

export default HeaderSection
