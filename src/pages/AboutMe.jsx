import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import AboutMeSection from '../components/template/HomeFeatuer/AboutMeSection'
import Footer from '../components/modules/Footer/Footer'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'
import Breadcrumb from "../components/modules/Breadcrumb/Breadcrumb"

function AboutMe() {
    return (
        <>
            <>
                <Breadcrumb title="مهارت ها" />

                <div>
                    <HeaderSctionBody title="درباره من" desc="خلاصه ای از رزومه من" />
                    <AboutMeSection />
                </div>

                <Footer />
                <ScrollTopBtn    />
            </>
        </>
    )
}

export default AboutMe