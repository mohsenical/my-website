import BoxItem from "../components/modules/BoxItem/BoxItem";
import HeaderSctionBody from "../components/modules/HeaderSctionBody/HeaderSctionBody";
import SocialMedia from "../components/modules/SocialMedia/SocialMedia";
import HeaderSection from "../components/template/HomeFeatuer/HeaderSection";

import { FaLaptop } from "react-icons/fa";

function Home() {
    console.log("home ");

    return (
        <>
            <HeaderSection />
            <SocialMedia />

            <div className="w-[90%] mx-auto">
                <div className="">
                    <HeaderSctionBody title="خدمات" desc="کار هایی که من انجام میدم" button="دریافت مشاوره رایگان" btnHref="/" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-evenly gap-x-5 m-15 ">
                        <BoxItem title="طراحی سایت" desc="محتوای سایتهای داینامیک بعد از طراحی توسط افراد عادی که دسترسی به سیستم مدیریت محتوای سایت را داشته باشند قابل تغییر است." icon={<FaLaptop />} />
                        <BoxItem title="طراحی سایت" desc="محتوای سایتهای داینامیک بعد از طراحی توسط افراد عادی که دسترسی به سیستم مدیریت محتوای سایت را داشته باشند قابل تغییر است." icon={<FaLaptop />}  />
                        <BoxItem title="طراحی سایت" desc="محتوای سایتهای داینامیک بعد از طراحی توسط افراد عادی که دسترسی به سیستم مدیریت محتوای سایت را داشته باشند قابل تغییر است." icon={<FaLaptop />}  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home