import Footer from "../components/modules/Footer/Footer";
import HeaderSctionBody from "../components/modules/HeaderSctionBody/HeaderSctionBody";
import ScrollTopBtn from "../components/modules/ScrollTopBtn/ScrollTopBtn";
import SocialMedia from "../components/modules/SocialMedia/SocialMedia";
import AboutMeSection from "../components/template/HomeFeatuer/AboutMeSection";
import BlogsSection from "../components/template/HomeFeatuer/BlogsSection";
import ContactMeSection from "../components/template/HomeFeatuer/ContactMeSection";
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
                    <HeaderSctionBody title="درباره من" desc="خلاصه ای از رزمه من" />
                    <AboutMeSection />
                </div>

                <div>
                    <HeaderSctionBody title="مهارت های من" desc="مهارت ها و تکنولوژی ها" />
                    <SkillsSection />
                </div>

                <div>
                    <HeaderSctionBody title="تماس با من" desc="ارتباط با من / مشاوره :)" />
                    <ContactMeSection />
                </div>


                <div>
                    <HeaderSctionBody title="مقالات" desc="جدید ترین های وبلاگ" />
                    <BlogsSection />
                </div>
            </div>

            <Footer />

            <ScrollTopBtn />
        </>
    )
}

export default Home