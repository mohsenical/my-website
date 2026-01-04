import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import ServicesSection from '../components/template/ServicesSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'

function Services() {
    return (
        <>
            <Breadcrumb title="خدمات" />


            <div>
                <HeaderSctionBody title="خدمات" desc="کار هایی که انجام میدهم" button="دریافت مشاوره رایگان" btnHref="/" />
                <ServicesSection />
            </div>


            <ScrollTopBtn />
        </>
    )
}

export default Services