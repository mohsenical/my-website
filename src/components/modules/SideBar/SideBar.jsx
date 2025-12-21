import useDarkMode from "../../../Hoocs/useDarkMode";
import { IoClose } from "react-icons/io5";


import { FaSun, FaMoon, FaHome, FaUser, FaBlog, FaGithub, FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";
import { sideBarItems } from "../../../Data/menuItem";



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

                <div className="flex flex-col mt-5 gap-y-3 pb-5 border-b border-b-zinc-300">

                    {sideBarItems.map(item => (
                        <div key={item.id} className="flex items-center justify-start w-30 gap-2 p-2 dark:text-gray-200 text-zinc-900">
                            {item.icon}
                            <a href={item.href}>{item.title}</a>
                        </div>
                    ))}


                </div>

                <div className='flex flex-col gap-y-5 text-xl mt-5 transition-all ' onClick={toogleDarkMode}>
                    <div className="w-7 p-1">
                        {
                            !isDark ? (<FaMoon className='text-black/50' />) : (<FaSun className='text-yellow-600' />)
                        }
                    </div>

                    <div className='flex gap-x-3 text-xl lg:text-2xl *:cursor-pointer '>
                        <FaGithub className='dark:text-white text-black' />
                        <FaTelegram className='text-blue-500' />
                        <FaInstagram className='text-pink-900' />
                        <FaLinkedin className='text-blue-800' />
                    </div>
                </div>
            </div>


            <div className="fixed inset-0 bg-black/50 md:hidden" onClick={sideBarClose}></div>

        </>
    )
}

export default SideBar