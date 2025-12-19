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
                    <div>
                        <img className='w-18 h-18 bg-cover rounded-full' src='/Image/Avatar.jpg' alt='Avatar' />
                    </div>

                    {/* Menu */}
                    <ul className='flex gap-x-6 text-xl text-gray-300'>
                        <li >
                            <a href="/" className='text-orange-200'>صفعه اصلی</a>
                        </li>

                        <li >
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
                            !darkMode ? (<FaMoon />) : (<FaSun />)
                        }
                    </div>

                    {/* Social Media */}
                    <div className='flex gap-x-4 text-2xl *:cursor-pointer *:hover:text-3xl transition-all'>
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