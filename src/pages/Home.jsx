import ScrollTopBtn from "../components/modules/ScrollTopBtn/ScrollTopBtn";
import SocialMedia from "../components/modules/SocialMedia/SocialMedia";
import ContactMe from "../components/template/HomeFeatuer/ContactMe";
import HeaderSection from "../components/template/HomeFeatuer/HeaderSection";
import ServicesSection from "../components/template/HomeFeatuer/ServicesSection";
import SkillsSection from "../components/template/HomeFeatuer/SkillsSection";



function Home() {
    console.log("home ");

    return (
        <>
            <HeaderSection />
            <SocialMedia />

            <div className="flex flex-col">
                <ServicesSection />
                <SkillsSection />
                <ContactMe />
            </div>

            <ScrollTopBtn />
        </>
    )
}

export default Home