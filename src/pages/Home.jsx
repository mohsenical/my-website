import BoxItem from "../components/modules/BoxItem/BoxItem";
import HeaderSctionBody from "../components/modules/HeaderSctionBody/HeaderSctionBody";
import ScrollTopBtn from "../components/modules/ScrollTopBtn/ScrollTopBtn";
import SocialMedia from "../components/modules/SocialMedia/SocialMedia";
import HeaderSection from "../components/template/HomeFeatuer/HeaderSection";
import { ServicesBoxs } from "../Data/menuItem";



function Home() {
    console.log("home ");

    return (
        <>
            <HeaderSection />
            <SocialMedia />

            <div className="w-[90%] mx-auto">
                <div className="">
                    <HeaderSctionBody title="خدمات" desc="کار هایی که من انجام میدم" button="دریافت مشاوره رایگان" btnHref="/" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-evenly gap-x-5 gap-y-2 ">
                        {
                            ServicesBoxs.map(box => (
                                <div key={box.id}>
                                    <BoxItem {...box} />
                                </div>
                            ))
                        }
                    </div>

                    <ScrollTopBtn />
                </div>
            </div>
        </>
    )
}

export default Home