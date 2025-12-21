import { useEffect, useState } from "react";
import useDarkMode from "../../../Hoocs/useDarkMode";

import Berger from "../Berger/Berger";
import SideBar from "../SideBar/SideBar";
import { FaSun, FaMoon, FaGithub, FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";

function Header() {

    const [sideBar, setSideBar] = useState(false)
    const { isDark, toogleDarkMode } = useDarkMode()

    const sideBarOpen = () => {
        setSideBar(true)
    }

    const sideBarClose = () => {
        setSideBar(false)
    }

    return (
        <div className="transition-all">
            {/* Header Laptop & Tablet Responsive */}
            <header className='hidden md:inline-block'>
                <div className="fixed top-8 right-0 left-0 flex items-center w-[98%] lg:w-[90%] h-18 lg:h-24 mx-auto shadow bg-black/50 rounded-3xl">
                    <div className="flex items-center justify-between w-full px-6 lg:px-10 py-5">
                        {/* Avatar & Menu */}
                        <nav className='flex items-center gap-x-5 lg:gap-x-9'>
                            {/* Avatar */}
                            <div className='flex items-center gap-x-0.5 justify-center h-full'>
                                <span className='text-zinc-200  text-xl lg:text-2xl mt-1.5'>Mohsenical</span>
                                <img className='size-6 lg:size-8 bg-cover' src='/Image/Logo.png' alt='Avatar' />
                            </div>

                            {/* Menu */}
                            <ul className='flex gap-x-5 lg:gap-x-9 text-[18px] lg:text-xl dark:text-gray-300 text-zinc-200 transition-all *:hover:text-orange-200 '>
                                <li >
                                    <a href="/">صفعه اصلی</a>
                                </li>

                                <li>
                                    <a href="/about-me">درباره من</a>
                                </li>

                                <li >
                                    <a href="/contact-me">ارتباط با من</a>
                                </li>

                                <li >
                                    <a href="/blogs">وبلاگ ها</a>
                                </li>
                            </ul>
                        </nav>

                        {/* Theme toggle & Social Media */}
                        <div className='flex gap-x-6 lg:gap-x-9'>
                            {/* Theme toggle */}
                            <button className='flex gap-x-2 text-xl lg:text-2xl cursor-pointer transition-all' onClick={toogleDarkMode}>
                                {
                                    isDark ? (<FaSun className='text-yellow-600' />) : (<FaMoon className='text-gray-200' />)
                                }
                            </button>

                            {/* Social Media */}
                            <div className='flex gap-x-2 text-xl lg:text-2xl *:cursor-pointer '>
                                <FaGithub className='text-white' />
                                <FaTelegram className='text-blue-500' />
                                <FaInstagram className='text-pink-900' />
                                <FaLinkedin className='text-blue-800' />
                            </div>
                        </div>
                    </div>
                </div>
            </header >

            {/* Header Mobile Responsive */}
            <div className="flex items-center justify-between md:hidden w-full h-22 py-5 px-5 dark:bg-black bg-zinc-200">
                <Berger sideBarOpen={sideBarOpen} />

                <div className='flex items-center gap-x-0.5 justify-center h-full'>
                    <span className='dark:text-gray-200 text-zinc-900 text-2xl mt-1.5'>Mohsenical</span>
                    <img className='size-8 bg-cover' src='/Image/Logo.png' alt='Avatar' />
                </div>
            </div>

            {
                sideBar && (<SideBar sideBarClose={sideBarClose} />)
            }

        </div>
    )
}

export default Header