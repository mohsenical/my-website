import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import ContactMeSection from '../components/template/ContactMeSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'
import ContactMeBox from '../components/modules/ContactMeBox/ContactMeBox';
import socialMediaData from '../Data/socialMediaData';

function ContactMe() {
  return (
    <>
      <Breadcrumb title="تماس" />

      <div>
        <HeaderSctionBody title="تماس با من" desc="ارتباط با من / مشاوره :)" />



        <div className="pb-5 md:px-24 w-full ">
          <div
            data-aos="zoom-in"
            className="w-[90%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-1 overflow-hidden"
          >

            {
              socialMediaData.map(data => (
                <div key={data.id}>
                  <ContactMeBox {...data} />
                </div>
              ))
            }

          </div>
        </div>





        <ContactMeSection />
      </div >

      <ScrollTopBtn />
    </>
  )
}

export default ContactMe