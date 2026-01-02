import React from 'react'
import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import Footer from '../components/modules/Footer/Footer'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import ContactMeSection from '../components/template/HomeFeatuer/ContactMeSection'

function Contact() {
    <>
        <Breadcrumb title="خدمات" />

        <div>
            <HeaderSctionBody title="تماس با من" desc="ارتباط با من / مشاوره :)" />
            <ContactMeSection />
        </div>

        <Footer />
    </>
}

export default Contact