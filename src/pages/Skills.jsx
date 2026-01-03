import Breadcrumb from "../components/modules/Breadcrumb/Breadcrumb"
import HeaderSctionBody from "../components/modules/HeaderSctionBody/HeaderSctionBody"
import ScrollTopBtn from "../components/modules/ScrollTopBtn/ScrollTopBtn"
import SkillsSection from "../components/template/HomeFeatuer/SkillsSection"


function Skills() {
    return (
        <>
            <Breadcrumb title="مهارت ها" />

            <div>
                <HeaderSctionBody title="مهارت های من" desc="مهارت ها و تکنولوژی ها" />
                <SkillsSection />
            </div>

            <ScrollTopBtn />
        </>
    )
}

export default Skills