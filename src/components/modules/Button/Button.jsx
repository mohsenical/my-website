import React from 'react'

function Button({ title }) {
    return (
        <div className="flex gap-x-5 *:flex *:justify-center *:items-center *:px-5 *:py-3 *:bg-slate-700 dark:*:bg-green-900 *:text-white dark:*:text-zinc-400 *:rounded-xl *:hover:text-gray-400 *:transition-colors *:cursor-pointer">
            <button className='text-xl lg:text-2xl xl:text-xl'> {title} </button>
        </div>
    )
}

export default Button