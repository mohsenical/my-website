import React from 'react'
import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import Footer from '../components/modules/Footer/Footer'
import ContactMeSection from '../components/template/HomeFeatuer/ContactMeSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'

function ContactMe() {
  return (
    <>
            <Breadcrumb title="تماس" />

                <div>
                    <HeaderSctionBody title="تماس با من" desc="ارتباط با من / مشاوره :)" />
                    <ContactMeSection />
                </div>

            <Footer />
            <ScrollTopBtn />
    </>
  )
}

export default ContactMe