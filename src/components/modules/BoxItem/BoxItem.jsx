import React from 'react'

function BoxItem({ title, desc, icon }) {

    return (
        <div className="flex flex-col justify-center items-start py-4 px-10 md:px-8 lg:px-5 md:h-[15rem] shadow bg-sky-900 dark:bg-zinc-800 hover:border-b-2 hover:border-slate-500 dark:hover:border-green-700 transition-all cursor-pointer">
            <div className="mb-5 text-slate-500 dark:text-green-700 text-6xl">
                {icon}
            </div>
            <h2 className="text-2xl text-zinc-300 mb-5">{title}</h2>
            <p className="text-md text-zinc-400"> {desc} </p>
        </div>
    )
}

export default BoxItem