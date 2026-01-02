import React from 'react'
import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import Footer from '../components/modules/Footer/Footer'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import ServicesSection from '../components/template/HomeFeatuer/ServicesSection'

function Services() {
    return (
        <>
            <Breadcrumb title="خدمات" />


            <div>
                <HeaderSctionBody title="خدمات" desc="کار هایی که انجام میدهم" button="دریافت مشاوره رایگان" btnHref="/" />
                <ServicesSection />
            </div>


            <Footer />
        </>
    )
}

export default Services