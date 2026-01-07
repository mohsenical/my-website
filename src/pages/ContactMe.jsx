import React from 'react';

import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import ContactMeSection from '../components/template/ContactMeSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'
import ContactMeBox from '../components/modules/ContactMeBox/ContactMeBox';
import Accordion from '../components/modules/Accordion/Accordion';

import { contactMeData, accordionData } from '../Data/contactMeData';
import HeaderIntro from '../components/modules/HeaderIntro/HeaderIntro';

function ContactMe() {
  return (
    <>
      <Breadcrumb title="تماس" />

      <div>
        <HeaderSctionBody title="تماس با من" desc="ارتباط با من / مشاوره :)" />

        <div className="pb-5 mb-5 md:px-24 w-full ">
          <div
            // data-aos="zoom-in"
            className="w-[90%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-1 overflow-hidden"
          >

            {
              contactMeData.map(data => (
                <div key={data.id}>
                  <ContactMeBox {...data} />
                </div>
              ))
            }


          </div>
        </div>

        <ContactMeSection />

        <HeaderIntro disc="سوالات متداول" title="جواب‌های سریع برای سوالات شما" />


        <div className="pb-5 md:px-24 w-full ">
          <div
            // data-aos="zoom-in"
            className="flex flex-col gap-x-0 md:gap-x-5 gap-y-5 justify-center items-center mx-auto w-[95%] md:w-[90%] py-10 bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md"
          >

            {
              accordionData.map(data => (
                <React.Fragment key={data.id}>
                  <Accordion {...data} />
                </React.Fragment>

              ))
            }

          </div>
        </div>

      </div >

      <ScrollTopBtn />
    </>
  )
}

export default ContactMe