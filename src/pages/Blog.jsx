import React from 'react'
import { useParams } from 'react-router-dom';

import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import { articlesData } from '../Data/articlesData';

import { IoMdTime } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GrArticle } from "react-icons/gr";
import NewArticle from '../components/modules/newArticle/newArticle';


function Blog() {

    const { articleID } = useParams()

    console.log();


    return (
        <>
            <Breadcrumb title="خواندن مقاله" />



            {
                articlesData.filter(data => data.id === Number(articleID)).map(article => (

                    <React.Fragment key={article.id}>
                        <></>


                        <div className=" h-[screen] py-5 mt-10 md:px-5 w-full ">
                            <div
                                className="mx-auto w-[95%] md:w-[90%] bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md p-5"
                            >

                                <div className="flex flex-col lg:flex-row justify-center items-center   ">

                                    <div className="flex flex-col justify-center items-center h-full w-full">
                                        <img src={article.image} alt="Next.js" className='object-contain object-center w-full h-full' />
                                    </div>


                                    <div className="flex flex-col justify-between items-center w-full h-[20rem] ">
                                        <div className="flex flex-col gap-y-5 w-full h-[75%] p-3">
                                            <h3 className='text-white text-xl '>{article.title}</h3>
                                            <p className='text-gray-400 line-clamp-7 mb-0'>
                                                {article.disc}
                                            </p>
                                        </div>

                                        <div className="flex gap-x-20 justify-start items-center *:flex *:justify-center *:items-center *:gap-x-2 h-[15%] w-full py-5 px-5">
                                            <div className="">
                                                <IoMdTime className='text-white text-xl' />
                                                <span className='text-md mt-1 text-gray-400'>بدون دیدگاه</span>
                                            </div>
                                            <div >
                                                <BiMessageSquareDetail className='text-white text-xl' />
                                                <span className='text-md mt-1 text-gray-400'>{article.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className=" h-[screen] py-5 md:px-5 w-full ">
                            <div
                                className="mx-auto w-[95%] md:w-[90%] bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md p-5"
                            >

                                <div className="flex flex-col lg:flex-row items-start gap-y-5 justify-between  w-full mt-10 rounded-xl overflow-hidden border border-white/20">
                                    <div className="leading-6 w-full lg:w-[60%] xl:w-[70%] h-full">
                                        <div className="w-[95%] mx-auto">
                                            <div className="w-full flex items-center justify-start h-10 mt-5">
                                                <h2 className='border-r-2 border-slate-500 dark:border-green-900 pr-2 text-white text-lg'>{article.title}</h2>
                                            </div>
                                            <div className="py-5">
                                                {
                                                    article.Description.map(data => (
                                                        <React.Fragment key={data.id}>
                                                            <p className='text-gray-400 pt-3 px-2'>{data.disc}</p>
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-y-3 md:gap-y-1 py-2 justify-center items-start pr-4  w-full lg:w-[40%] xl:w-[30%]">
                                        <div className="flex justify-start mx-auto gap-x-3 p-3 w-[90%] border-b border-white/20">
                                            <GrArticle className='text-slate-500 dark:text-green-900 text-2xl' />
                                            <h4 className='text-white text-xl mt-1'>جدید ترین مقالات</h4>
                                        </div>

                                        <div className="mt-2">
                                            {
                                                articlesData.map(data => (
                                                    <React.Fragment key={data.id}>
                                                        <NewArticle {...data} />
                                                    </React.Fragment>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </React.Fragment>
                ))
            }
        </>
    )
}

export default Blog