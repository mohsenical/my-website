import React from 'react'

import { PiPhoneCallLight } from "react-icons/pi";
import { LiaTelegramPlane } from "react-icons/lia";
import { LiaWhatsapp } from "react-icons/lia";
import { LiaCommentsSolid } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";

function SocialMedia() {
    return (
        <div className='hidden md:block fixed md:flex flex-col gap-y-3 left-[2.5rem] top-[25rem] *:p-1 shadow *:text-5xl *:bg-slate-700 dark:*:bg-green-900 text-white dark:text-gray-900 dark:*:text-zinc-500 *:rounded-md *:hover:text-gray-400 dark:*:hover:text-white *:transition-all *:cursor-pointer'>
            <FaGithub />
            <PiPhoneCallLight />
            <LiaWhatsapp />
            <LiaCommentsSolid />
            <LiaLinkedin />
        </div>
    )
}

export default SocialMedia