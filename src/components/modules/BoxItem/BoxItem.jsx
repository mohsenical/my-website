import React from 'react'

function BoxItem({ title, desc, icon }) {

    return (
        <div className="flex flex-col justify-center items-start gap-x-5 py-4 px-5 h-[19rem] bg-zinc-800 hover:border-b-2 hover:border-green-700 transition-all cursor-pointer">
            <div className="mb-5 text-green-700 text-6xl">
                {icon}
            </div>
            <h2 className="text-2xl text-zinc-300 mb-5">{title}</h2>
            <p className="text-md text-zinc-400"> {desc} </p>
        </div>
    )
}

export default BoxItem