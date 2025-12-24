import React from 'react'

function BoxItem({ title, desc, icon }) {

    return (
        <div className="bg-red-500 flex flex-col justify-center items-center gap-y-5 w-[15rem] h-[15rem]">
            {icon}
            <h2 className="">{title}</h2>
            <p className=""> {desc} </p>
        </div>
    )
}

export default BoxItem