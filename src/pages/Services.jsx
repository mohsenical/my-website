import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import ServicesSection from '../components/template/ServicesSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'
import HeaderIntro from '../components/modules/HeaderIntro/HeaderIntro'

import { FaArrowsTurnRight } from "react-icons/fa6";

function Services() {
    return (
        <>
            <Breadcrumb title="خدمات" />


            <div>
                <HeaderSctionBody title="خدمات" desc="کار هایی که انجام میدهم" button="دریافت مشاوره رایگان" />
                <ServicesSection />
            </div>

            <ScrollTopBtn />
        </>
    )
}

export default Services