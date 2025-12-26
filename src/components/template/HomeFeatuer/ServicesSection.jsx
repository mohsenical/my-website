import BoxItem from '../../modules/BoxItem/BoxItem'
import HeaderSctionBody from '../../modules/HeaderSctionBody/HeaderSctionBody'
import { ServicesBoxs } from "../../../Data/data"

function ServicesSection() {
    return (
        <div className="my-10 w-[90%] mx-auto">

            <HeaderSctionBody title="خدمات" desc="کار هایی که انجام میدهم" button="دریافت مشاوره رایگان" btnHref="/" />

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
    )
}

export default ServicesSection