import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import AboutMeSection from '../components/template/AboutMeSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'
import Breadcrumb from "../components/modules/Breadcrumb/Breadcrumb"

function AboutMe() {
    return (
        <>
            <>
                <Breadcrumb title="درباره من" />

                <div>
                    <HeaderSctionBody title="درباره من" desc="خلاصه ای از رزومه من" />
                    <AboutMeSection />
                </div>

                <ScrollTopBtn    />
            </>
        </>
    )
}

export default AboutMe