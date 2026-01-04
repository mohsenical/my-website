import BoxItem from '../modules/BoxItem/BoxItem'
import { servicesData } from "../../Data/servicesData"

function ServicesSection() {
    return (
        <div className="w-full pb-5">

            <div className="w-[90%] mx-auto">
                <div
                    data-aos="fade-up"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-evenly gap-5 lg:mx-5 ">
                    {
                        servicesData.slice(0,3).map(box => (
                            <div key={box.id}>
                                <BoxItem {...box} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesSection