import React from 'react'

import { PiPhoneCallLight } from "react-icons/pi";
import { LiaTelegramPlane } from "react-icons/lia";
import { LiaWhatsapp } from "react-icons/lia";
import { LiaCommentsSolid } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";

function SocialMedia() {
    return (
        <div className='hidden md:block fixed md:flex flex-col gap-y-3 left-[3rem] top-[25rem] *:p-1 *:text-5xl *:bg-green-700 dark:*:bg-green-900 text-gray-900 dark:*:text-zinc-500 *:rounded-md *:hover:text-white *:transition-all *:cursor-pointer'>
            <FaGithub />
            <PiPhoneCallLight />
            <LiaWhatsapp />
            <LiaCommentsSolid />
            <LiaLinkedin />
        </div>
    )
}

export default SocialMedia