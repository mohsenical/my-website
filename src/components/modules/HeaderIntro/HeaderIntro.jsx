import React from 'react'
import { ReactTyped } from 'react-typed'


function HeaderIntro({ disc, title }) {
    return (
        <div
            className="flex flex-col justify-center items-center gap-y-2 w-[70%] md:w-[40%] py-5 mb-10 my-5 mx-auto border-b-2 border-t-2 border-slate-500/20 dark:border-green-900/20 shadow-sm"
        >

            <p className='text-lg text-slate-500 dark:text-green-900'>{title}</p>
            <ReactTyped
                className='text-xl text-white'
               strings={[ disc ]}
                typeSpeed={80}
                backSpeed={50}
                loop
            />

 
        </div>
    )
}

export default HeaderIntro