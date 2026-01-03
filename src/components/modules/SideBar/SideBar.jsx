import useDarkMode from "../../../Hoocs/useDarkMode";

import { sideBarItems } from "../../../Data/menuData";

import { IoClose } from "react-icons/io5";
import { LiaWhatsapp } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { FaSun, FaMoon, FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";



function SideBar({ sideBarClose }) {

    const { isDark, toogleDarkMode } = useDarkMode()

    return (
        <>
            <div className="fixed top-0 right-0 bottom-0 w-70 scroll-auto bg-white dark:bg-black z-50 shadow px-3 md:hidden">
                <div className="flex items-center justify-between mt-2 py-5 px-3 border-b border-b-zinc-300">
                    <IoClose
                        className="text-zinc-700 text-2xl text-shadow-black hover:rotate-180 transition-all"
                        onClick={sideBarClose}
                    />

                    <div className='flex items-center gap-x-0.5 justify-center h-full'>
                        <span className='dark:text-gray-200 text-zinc-900 text-xl mt-1.5'>Mohsenical</span>
                        <img className='size-5 bg-cover' src='/Image/Logo.png' alt='Avatar' />
                    </div>
                </div>

                <div className="flex flex-col mt-5 gap-y-3 pb-5 border-b border-b-zinc-300 text-md">

                    {sideBarItems.map(item => (
                        <div key={item.id} className="flex items-center justify-start w-30 gap-2 p-2 dark:text-gray-200 text-zinc-900">
                            <div className="text-slate-500 dark:text-green-900">
                                 {item.icon}
                            </div>
                            <Link to={item.href} onClick={sideBarClose}>{item.title}</Link>
                        </div>
                    ))}


                </div>

                <div className='flex flex-col gap-y-8 text-xl mt-5 transition-all ' >
                    <div className="w-7 p-1">
                        {
                            !isDark ? (<FaMoon className='text-black/50' onClick={toogleDarkMode} />) : (<FaSun className='text-yellow-600' onClick={toogleDarkMode} />)
                        }
                    </div>

                    <div className='flex gap-x-3 text-3xl lg:text-2xl *:cursor-pointer '>
                        <FaGithub className='dark:text-white text-black' />
                        <FaTelegram className='text-blue-500 bg-gray-200 rounded-full p-0.5' />
                        <FaInstagram className='bg-pink-900 text-white rounded-full p-0.5' />
                        <LiaWhatsapp className='bg-green-800 text-white rounded-full p-0.5' />
                        <LiaLinkedin className='bg-blue-800 text-white rounded-full p-0.5' />
                    </div>
                </div>
            </div>


            <div className="fixed inset-0 bg-black/50 block md:hidden z-49" onClick={sideBarClose}></div>

        </>
    )
}

export default SideBar