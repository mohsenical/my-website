import React, { useState } from 'react'
import { FiChevronUp } from "react-icons/fi";

function Accordion({ title, content }) {

    const [open, setOpen] = useState(false)

    return (
        <div
            className='w-[90%] mx-auto bg-white/10 dark:bg-[#1f1f1f] rounded-xl px-6 py-5 cursor-pointer transition border-2 border-transparent hover:border-slate-500 dark:hover:border-green-900'
            onClick={() => setOpen(!open)}
        >

            <div className="flex justify-between items-center">
                <h3 className='text-right text-white text-xl'> {title} </h3>

                <FiChevronUp className={`text-white text-xl transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </div>

            <div className={` border-r-2 border-r-slate-500 dark:border-r-green-900 pr-2 text-gray-300 mt-5 text-lg leading-8 text-right transition-all duration-300 overflow-hidden ${open ? " opacity-100" : "max-h-0 opacity-0"}`}>
                {content}
            </div>

        </div>

    )
}

export default Accordion