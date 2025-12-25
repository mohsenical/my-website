import React from 'react'

function HeaderSctionBody({ title, desc, button, btnHref }) {
    return (
        <div className=" flex items-center justify-between px-2 md:px-15 py-5 m-8">
            <div className=" flex flex-col gap-y-0 md:gap-y-1 border-r-2 border-slate-700 dark:border-green-700 px-2 md:px-5">
                <h2 className='text-xl lg:text-2xl xl:text-3xl text-slate-600 dark:text-green-700'> {title} </h2>
                <h4 className='text-md lg:text-xl xl:text-2xl text-zinc-400 dark:text-gray-400'> {desc} </h4>
            </div>

            {button ? (
                <div className="*:flex *:justify-center *:items-center *:px-2 *:py-3 md:*:py-3 *:bg-slate-700 dark:*:bg-green-700 *:text-white dark:*:text-zinc-400 *:rounded-xl *:hover:text-gray-300 *:transition-colors *:cursor-pointer">
                    <a href={`/${btnHref}`} className="text-sm lg:text-xl">
                        {button}
                    </a>
                </div>
            ) : null}
        </div>
    )
}

export default HeaderSctionBody