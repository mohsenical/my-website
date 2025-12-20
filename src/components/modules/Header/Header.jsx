import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaGithub, FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";
import Berger from "../Berger/Berger";

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
        <>
            {/* Header Laptop & Tablet Responsive */}
            <header className='hidden md:inline-block'>
                <div className="fixed top-8 right-0 left-0 flex items-center w-[98%] lg:w-[90%] h-18 lg:h-24 mx-auto shadow bg-black/50 rounded-3xl">
                    <div className="flex items-center justify-between w-full px-6 lg:px-10 py-5">
                        {/* Avatar & Menu */}
                        <nav className='flex items-center gap-x-5 lg:gap-x-9'>
                            {/* Avatar */}
                            <div className='flex items-center gap-x-0.5 justify-center h-full'>
                                <span className='text-orange-200 text-xl lg:text-2xl mt-1.5'>Mohsenical</span>
                                <img className='size-6 lg:size-8 bg-cover' src='/Image/Logo.png' alt='Avatar' />
                            </div>

                            {/* Menu */}
                            <ul className='flex gap-x-5 lg:gap-x-9 text-[18px] lg:text-xl text-gray-300 transition-all *:hover:text-orange-200 '>
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
                            <div className='flex gap-x-2 text-xl lg:text-2xl cursor-pointer transition-all' onClick={darkModeHandeler}>
                                {
                                    !darkMode ? (<FaMoon className='text-gray-200' />) : (<FaSun className='text-yellow-600' />)
                                }
                            </div>

                            {/* Social Media */}
                            <div className='flex gap-x-2 text-xl lg:text-2xl *:cursor-pointer '>
                                <FaGithub className='' />
                                <FaTelegram className='text-blue-500' />
                                <FaInstagram className='' />
                                <FaLinkedin className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </header >

            {/* Header Mobile Responsive */}
            <div className="flex items-center justify-between md:hidden w-full h-22 py-5 px-10 bg-zinc-200">
                <Berger />

                <div className='flex items-center gap-x-0.5 justify-center h-full'>
                    <span className='text-zinc-700 text-2xl mt-1.5'>Mohsenical</span>
                    <img className='size-8 bg-cover' src='/Image/Logo.png' alt='Avatar' />
                </div>

            </div>
        </>
    )
}

export default Header