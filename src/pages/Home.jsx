import BoxItem from "../components/modules/BoxItem/BoxItem";
import HeaderSctionBody from "../components/modules/HeaderSctionBody/HeaderSctionBody";
import ScrollTopBtn from "../components/modules/ScrollTopBtn/ScrollTopBtn";
import SocialMedia from "../components/modules/SocialMedia/SocialMedia";
import HeaderSection from "../components/template/HomeFeatuer/HeaderSection";
import { ServicesBoxs } from "../Data/data";



function Home() {
    console.log("home ");

    return (
        <>
            <HeaderSection />
            <SocialMedia />

            <div className="">
                <div className="my-10 w-[90%] mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-evenly gap-5 mb-10 md:8 lg:mx-5 xl:3 ">
                        {
                            ServicesBoxs.map(box => (
                                <div key={box.id}>
                                    <BoxItem {...box} />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="my-10 bg-white dark:bg-black w-full">
                    <HeaderSctionBody title="مهارت ها" desc="قسمتی از توانایی های من" />
                </div>

            </div>
            <ScrollTopBtn />
        </>
    )
}

export default Home