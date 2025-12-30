import HeaderSctionBody from "../components/modules/HeaderSctionBody/HeaderSctionBody";
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

            <div className="flex flex-col *:w-full">
                <div>
                    <HeaderSctionBody title="خدمات" desc="کار هایی که انجام میدهم" button="دریافت مشاوره رایگان" btnHref="/" />
                    <ServicesSection />
                </div>

                <div>
                    <HeaderSctionBody title="مهارت های من" desc="مهارت ها و تکنولوژی ها" />
                    <SkillsSection />
                </div>

                <div>
                    <HeaderSctionBody title="مهارت های من" desc="مهارت ها و تکنولوژی ها" />
                    <ContactMe />
                </div>
            </div>

            <ScrollTopBtn />
        </>
    )
}

export default Home