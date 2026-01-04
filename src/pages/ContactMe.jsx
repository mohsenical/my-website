import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import ContactMeSection from '../components/template/ContactMeSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'

import { FaWhatsapp } from "react-icons/fa";

function ContactMe() {
  return (
    <>
      <Breadcrumb title="تماس" />

      <div>
        <HeaderSctionBody title="تماس با من" desc="ارتباط با من / مشاوره :)" />


        <div className="md:pb-5 px-5 pb-5">
          <div
            data-aos="zoom-in"
            className="grid grid-cols-2 md:grid-cols-4 gap-x-1 md:gap-x-5 gap-y-5 md:gap-y-5 justify-center items-center mx-auto w-[95%] md:w-[84%] p-5 px-5  rounded-2xl overflow-hidden "
          >


            <div className="w-[100%] mx-auto flex flex-col justify-center items-center gap-x-5 gap-y-10 p-3 py-5 bg-white/10 dark:bg-black/50  rounded-xl">
              <div className="bg-green-900  flex justify-center items-center p-2 rounded-full">
                <FaWhatsapp className='text-5xl text-white' />
              </div>
              <div className="flex gap-y-1 flex-col justify-center items-center">
                <p className='text-gray-400 text-md lg:text-lg'>تلگرام</p>
                <h2 className='text-xl lg:text-2xl text-white'>0914-149-3036</h2>
              </div>
            </div>


            <div className="w-[100%] mx-auto flex flex-col justify-center items-center gap-x-5 gap-y-10 p-3 py-5 bg-white/10 dark:bg-black/50  rounded-xl">
              <div className="bg-green-900  flex justify-center items-center p-2 rounded-full">
                <FaWhatsapp className='text-5xl text-white' />
              </div>
              <div className="flex gap-y-1 flex-col justify-center items-center">
                <p className='text-gray-400 text-md lg:text-lg'>تلگرام</p>
                <h2 className='text-xl lg:text-2xl text-white'>0914-149-3036</h2>
              </div>
            </div>


            <div className="w-[100%] mx-auto flex flex-col justify-center items-center gap-x-5 gap-y-10 p-3 py-5 bg-white/10 dark:bg-black/50  rounded-xl">
              <div className="bg-green-900  flex justify-center items-center p-2 rounded-full">
                <FaWhatsapp className='text-5xl text-white' />
              </div>
              <div className="flex gap-y-1 flex-col justify-center items-center">
                <p className='text-gray-400 text-md lg:text-lg'>تلگرام</p>
                <h2 className='text-xl lg:text-2xl text-white'>0914-149-3036</h2>
              </div>
            </div>


            <div className="w-[100%] mx-auto flex flex-col justify-center items-center gap-x-5 gap-y-10 p-3 py-5 bg-white/10 dark:bg-black/50  rounded-xl">
              <div className="bg-green-900  flex justify-center items-center p-2 rounded-full">
                <FaWhatsapp className='text-5xl text-white' />
              </div>
              <div className="flex gap-y-1 flex-col justify-center items-center">
                <p className='text-gray-400 text-md lg:text-lg'>تلگرام</p>
                <h2 className='text-xl lg:text-2xl text-white'>0914-149-3036</h2>
              </div>
            </div>



          </div>
        </div>

        <ContactMeSection />
      </div>

      <ScrollTopBtn />
    </>
  )
}

export default ContactMe