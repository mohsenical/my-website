import { useState } from "react";
import useDarkMode from "../../../Hoocs/useDarkMode";

import Berger from "../Berger/Berger";
import SideBar from "../SideBar/SideBar";
import { menuItem } from "../../../Data/menuItem"

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
        <>
            {/* Header Laptop & Tablet Responsive */}
            <header className='hidden md:block'>
                <div className="fixed top-0 right-0 left-0 z-50 flex items-center w-screen h-18 lg:h-20 shadow bg-black backdrop-blur-xl">
                    <div className="flex items-center justify-between w-full px-6 lg:px-10 py-5">
                        <nav className='flex items-center gap-x-5 lg:gap-x-9'>
                            <ul className='flex gap-x-5 lg:gap-x-9 text-[18px] lg:text-xl text-zinc-400 *:hover:text-white *:transition-colors'>

                                {menuItem.map(menu => (
                                    <li key={menu.id}>
                                        <a href={menu.href}>{menu.title}</a>
                                    </li>
                                ))}

                            </ul>
                        </nav>

                        <div className='flex items-center gap-x-4 lg:gap-x-5  '>
                            <button className='flex gap-x-2 text-xl lg:text-2xl cursor-pointer transition-all' onClick={toogleDarkMode}>
                                {
                                    isDark ? (<FaSun className='text-yellow-600' />) : (<FaMoon className='text-gray-200' />)
                                }
                            </button>

                            <span className="w-[2px] h-7 bg-gray-200/50"></span>

                            <a href="/" className='flex items-center gap-x-0.5 justify-center h-full cursor-pointer'>
                                <span className='mt-1.5 text-zinc-400 hover:text-white transition-colors  text-xl lg:text-2xl'>Mohsenical</span>
                                <img className='size-6 lg:size-8 bg-cover' src='/Image/Logo.png' alt='Avatar' />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Header Mobile Responsive */}
            <div className="flex fixed inset-0 items-center md:hidden justify-between w-full h-22 py-5 px-5 dark:bg-black bg-zinc-200 z-50">
                <Berger sideBarOpen={sideBarOpen} />

                <div className='flex items-center justify-center gap-x-3 h-full'>
                    <span className='dark:text-zinc-300 text-zinc-900 text-2xl mt-1.5'>Mohsen Peighami</span>
                    <img className='size-15 bg-cover rounded-full' src='/Image/Avatar.jpg' alt='Avatar' />
                </div>
            </div>

            {
                sideBar && (<SideBar sideBarClose={sideBarClose} />)
            }

        </>
    )
}

export default Header


// "fixed top-8 right-0 left-0 flex items-center w-[98%] lg:w-[90%] h-18 lg:h-24 mx-auto shadow bg-black/50 backdrop-blur-xl rounded-3xl" headers fixed