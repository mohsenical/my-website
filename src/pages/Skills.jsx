import Breadcrumb from "../components/modules/Breadcrumb/Breadcrumb"
import Footer from "../components/modules/Footer/Footer"
import HeaderSctionBody from "../components/modules/HeaderSctionBody/HeaderSctionBody"
import SkillsSection from "../components/template/HomeFeatuer/SkillsSection"


function Skills() {
    return (
        <>
            <Breadcrumb title="مهارت ها" />

            <div>
                <HeaderSctionBody title="مهارت های من" desc="مهارت ها و تکنولوژی ها" />
                <SkillsSection />
            </div>

            <Footer />
        </>
    )
}

export default Skills