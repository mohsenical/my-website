import { IoClose } from "react-icons/io5";
import {
    FaSun, FaMoon, FaHome, FaUser, FaBlog
} from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { useEffect, useState } from "react";


function SideBar({ sideBarClose }) {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (!darkMode) {
            document.body.classList.add("dark")
            document.body.style.backgroundColor = "#404040"
        } else {
            document.body.classList.remove("dark")
            document.body.style.backgroundColor = "#cccccc"
        }
    }, [darkMode])

    const darkModeHandeler = () => {
        setDarkMode(!darkMode)
    }

    return (
        <>
            <div className="fixed top-0 right-0 bottom-0 w-70 bg-white dark:bg-black z-50 shadow px-3">
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
                    <div className="flex items-center justify-start w-30 gap-2 p-2 dark:text-gray-200 text-zinc-900">
                        <FaHome />
                        <a href="/">صفعه اصلی</a>
                    </div>

                    <div className="flex items-center justify-start w-30 gap-2 p-2 dark:text-gray-200 text-zinc-900">
                        <FaUser />
                        <a href="/about-me">درباره من</a>
                    </div>

                    <div className="flex items-center justify-start w-30 gap-2 p-2 dark:text-gray-200 text-zinc-900">
                        <FiMessageSquare />
                        <a href="/contact-me">ارتباط با من</a>
                    </div>

                    <div className="flex items-center justify-start w-30 gap-2 p-2 dark:text-gray-200 text-zinc-900">
                        <FaBlog />
                        <a href="/blogs">وبلاگ ها</a>
                    </div>
                </div>

                <div className='flex text-xl mt-5 transition-all' onClick={darkModeHandeler}>
                    {
                        !darkMode ? (<FaMoon className='text-gray-200' />) : (<FaSun className='text-yellow-600' />)
                    }
                </div>
            </div>


            <div className="fixed inset-0 bg-black/50" onClick={sideBarClose}></div>

        </>
    )
}

export default SideBar