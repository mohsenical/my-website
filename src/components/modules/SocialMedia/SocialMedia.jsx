import clsx from 'clsx';

import useTopbarFixed from '../../../Hoocs/useTopbarFixed';

import { LiaWhatsapp } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";

function SocialMedia() {

    const { fixTop } = useTopbarFixed()




    return (
        <div 
        className={clsx("hidden md:block fixed md:flex flex-col gap-y-3 *:p-1 shadow *:text-5xl *:bg-slate-500 dark:*:bg-green-900 text-white dark:text-gray-900 dark:*:text-zinc-500 *:rounded-md *:hover:text-gray-400 dark:*:hover:text-white *:transition-all *:cursor-pointer transition-all", fixTop ? " left-[1rem] bottom-[2rem]" : " left-[2.5rem] bottom-[5rem] ")}>
            <FaGithub />
            <LiaWhatsapp />
            <LiaLinkedin />
            <FaTelegram />
            <FaInstagram />
        </div>
    )
}

export default SocialMedia