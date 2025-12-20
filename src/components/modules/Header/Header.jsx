import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

import { FaSun, FaMoon, FaGithub, FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";


function Header() {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (!darkMode) {
            document.body.classList.add("dark")
            document.body.style.backgroundColor = "#404040"
        } else {
            document.body.classList.remove("dark")
            document.body.style.backgroundColor = "#ffffff"
        }
    }, [darkMode])

    const darkModeHandeler = () => {
        setDarkMode(!darkMode)
    }

    return (
        <header className='fixed top-8 right-0 left-0 flex items-center w-[90%] h-24 mx-auto bg-black/50 rounded-3xl'>
            <div className="flex items-center justify-between w-full px-10 py-5">
                {/* Avatar & Menu */}
                <nav className='flex items-center gap-x-9'>
                    {/* Avatar */}
                    <div className='flex items-center justify-center h-full'>
                        <span className='text-gray-300 text-2xl mt-1.5'>Mohsenical</span>
                        <img className='w-8 h-8 bg-cover' src='/Image/Logo.png' alt='Avatar' />
                    </div>

                    {/* Menu */}
                    <ul className='flex gap-x-9 text-xl text-gray-300 transition-all *:hover:text-orange-200 '>
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
                <div className='flex gap-x-9'>
                    {/* Theme toggle */}
                    <div className='flex gap-x-2 text-2xl cursor-pointer transition-all' onClick={darkModeHandeler}>
                        {
                            !darkMode ? (<FaMoon className='text-gray-200' />) : (<FaSun className='text-yellow-600' />)
                        }
                    </div>

                    {/* Social Media */}
                    <div className='flex gap-x-2 text-2xl *:cursor-pointer '>
                        <FaGithub className='' />
                        <FaTelegram className='text-blue-500' />
                        <FaInstagram className='' />
                        <FaLinkedin className='' />
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header