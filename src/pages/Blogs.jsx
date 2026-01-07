import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import BlogsSection from '../components/template/BlogsSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'
import Articles from '../components/modules/Articles/Articles'
import { articlesData } from '../Data/articlesData'
import React from 'react'
import HeaderIntro from '../components/modules/HeaderIntro/HeaderIntro'

function Blog() {
    return (
        <>
            <Breadcrumb title="مقالات" />

            <div>
                <HeaderSctionBody title="مقالات" desc="همه مقالات سایت" />

                <div className=" h-[screen] pb-5 px-5 md:px-20 w-full ">
                    <div
                        data-aos="zoom-in"
                        className="grid grid-cols-1 xl:grid-cols-3 gap-x-2 md:gap-x-5 gap-y-5 mx-auto w-[95%] md:w-[90%] bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md p-5"
                    >

                        {
                            articlesData.map(data => (
                                <React.Fragment key={data.id}>
                                    <Articles {...data} />
                                </React.Fragment>
                            ))
                        }

                    </div>
                </div>

            </div>

            <ScrollTopBtn />
        </>
    )
}

export default Blog