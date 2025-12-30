import React from 'react'

function BoxSkills({ icon, title, status }) {
    return (
        <div className="flex justify-center items-center ">
            <div className="flex flex-col gap-y-3 justify-center items-center bg-sky-900 dark:bg-white/20 py-5 px-6 w-full rounded-xl  ">
                <div className='text-7xl text-slate-500 dark:text-green-600'>
                    {icon}
                </div>

                <p className='text-white'>{ title }</p>

                <div className="flex justify-center items-center w-[90%] h-10 rounded-md pt-1 bg-slate-500 dark:bg-green-800 text-white">
                    <p>{ status }</p>
                </div>
            </div>
        </div>
    )
}

export default BoxSkills