import React from 'react'
import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'

import { IoMdTime } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import { articlesData } from '../Data/articlesData';
import { useParams } from 'react-router-dom';

function Blog() {

    const { articleID } = useParams()

    console.log();


    return (
        <>
            <Breadcrumb title="درباره من" />

            <div className=" h-[screen] py-5 mt-10 md:px-20 w-full ">
                <div
                    className="mx-auto w-[95%] md:w-[90%] bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md p-5"
                >

                    {
                        articlesData.filter(data => data.id === Number(articleID)).map(article => (

                            <>
                                <div className="flex flex-col lg:flex-row justify-center items-center  rounded-xl overflow-hidden border border-white/20">

                                    <div className="flex flex-col justify-center items-center h-full w-full">
                                        <img src={article.image} alt="Next.js" className='object-contain object-center w-full h-full' />
                                    </div>


                                    <div className="flex flex-col justify-between items-center w-full h-[20rem] ">
                                        <div className="flex flex-col gap-y-5 w-full h-[75%] p-3">
                                            <h3 className='text-white text-xl '>{article.title}</h3>
                                            <p className='text-gray-400 line-clamp-10 mb-0'>
                                                {article.disc}
                                            </p>
                                        </div>

                                        <div className="flex gap-x-20 justify-start items-center *:flex *:justify-center *:items-center *:gap-x-2 h-[15%] w-full py-5 px-5">
                                            <div className="">
                                                <IoMdTime className='text-white text-xl' />
                                                <span className='text-md mt-1 text-gray-400'>بدون دیدگاه</span>
                                            </div>
                                            <div className="">
                                                <BiMessageSquareDetail className='text-white text-xl' />
                                                <span className='text-md mt-1 text-gray-400'>article.date</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="bg-red-500 w-full h-24 mt-10 rounded-xl overflow-hidden border border-white/20">
                                    <div className=""></div>
                                    <div className=""></div>
                                </div>
                            </>
                        ))
                    }


                </div>
            </div>

        </>
    )
}

export default Blog