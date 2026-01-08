import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import ServicesSection from '../components/template/ServicesSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'
import Accordion from '../components/modules/Accordion/Accordion'
import React from 'react'
import { accordionDataServises } from '../Data/servicesData'



function Services() {
    return (
        <>
            <Breadcrumb title="خدمات" />


            <div>
                <HeaderSctionBody title="خدمات" desc="کار هایی که انجام میدهم" button="دریافت مشاوره رایگان" />
                <ServicesSection />
            </div>

            <HeaderSctionBody title="سوالات متداول" desc="جواب‌های سریع برای سوالات شما" />
            <div className="pb-5 md:px-24 w-full ">
                <div
                    // data-aos="zoom-in"
                    className="flex flex-col gap-x-0 md:gap-x-5 gap-y-5 justify-center items-center mx-auto w-[95%] md:w-[90%] py-10 bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md"
                >

                    {
                        accordionDataServises.map(data => (
                            <React.Fragment key={data.id}>
                                <Accordion {...data} />
                            </React.Fragment>

                        ))
                    }

                </div>
            </div>

            <ScrollTopBtn />
        </>
    )
}

export default Services