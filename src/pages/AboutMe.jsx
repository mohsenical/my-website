import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import AboutMeSection from '../components/template/AboutMeSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'
import Breadcrumb from "../components/modules/Breadcrumb/Breadcrumb"
import BoxSkills from '../components/modules/BoxSkills/BoxSkills'
import { skillsData } from '../Data/skillsData'
import HeaderIntro from '../components/modules/HeaderIntro/HeaderIntro'

function AboutMe() {
    return (
        <>
            <>
                <Breadcrumb title="درباره من" />

                <div className='flex flex-col gap-y-5'>
                    <HeaderSctionBody title="درباره من" desc="خلاصه ای از رزومه من" />

                    <AboutMeSection />

                    <HeaderIntro disc="توتنایی های من برای کمک ب شما" title="مهارت ها" />

                    <div className="md:pb-5 px-5 md:px-24">
                        <div
                            data-aos="zoom-in"
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-1 md:gap-x-5 gap-y-1 md:gap-y-5 justify-center items-center mx-auto w-[95%] md:w-[90%] py-5 px-5  bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md"
                        >
                            {
                                skillsData.slice(0, 5).map(box => (
                                    <BoxSkills {...box} />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <ScrollTopBtn />
            </>
        </>
    )
}

export default AboutMe