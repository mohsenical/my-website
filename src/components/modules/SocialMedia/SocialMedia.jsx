import React, { useEffect, useState } from 'react'
import clsx from 'clsx';

import { PiPhoneCallLight } from "react-icons/pi";
import { LiaWhatsapp } from "react-icons/lia";
import { LiaCommentsSolid } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";

function SocialMedia() {

        const [fixTop, setFixTop] = useState(false)
    
    
        useEffect(() => {
            
            const fixNavbarToTop = () => {
                const currentScroll = window.pageYOffset
                
                
                if (currentScroll > 90) {
                    setFixTop(true)
                } else {
                    setFixTop(false)
                }
            }
            
            window.addEventListener("scroll", fixNavbarToTop)
            return () => removeEventListener("scroll", fixNavbarToTop)
        }, [])


    return (
        <div className={clsx("hidden md:block fixed md:flex flex-col gap-y-3 *:p-1 shadow *:text-5xl *:bg-slate-700 dark:*:bg-green-900 text-white dark:text-gray-900 dark:*:text-zinc-500 *:rounded-md *:hover:text-gray-400 dark:*:hover:text-white *:transition-all *:cursor-pointer transition-all", fixTop ? " left-[1rem] top-[22rem]" : " left-[2.5rem] top-[25rem] ")}>
            <FaGithub />
            <PiPhoneCallLight />
            <LiaWhatsapp />
            <LiaCommentsSolid />
            <LiaLinkedin />
        </div>
    )
}

export default SocialMedia