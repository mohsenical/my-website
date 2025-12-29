
import HeaderSctionBody from '../../modules/HeaderSctionBody/HeaderSctionBody'

import { SiTicktick } from "react-icons/si";

function AboutSection() {
    return (
        <div className=" h-[screen] pb-15 px-5 md:px-24 w-full ">

            <HeaderSctionBody title="مهارت های من" desc="مهارت ها و تکنولوژی ها" />

            <div className="flex flex-col xl:flex-row gap-x-0 md:gap-x-5 gap-y-5 justify-center items-center mx-auto w-[95%] md:w-[80%] py-10 bg-sky-950 dark:bg-zinc-800 rounded-2xl overflow-hidden">

                <div className="w-[90%] lg:w-[90%] xl:w-[40%] mx-10">
                    <div className="w-full flex flex-col gap-y-4 justify-center items-start">

                        <p className='text-lg text-zinc-300 dark:text-gray-400'>تماس با من</p>
                        <h2 className='text-2xl text-zinc-300 dark:text-white'> <span className='text-slate-500 dark:text-green-700'>درباره پروژه بعدی</span> صعبت کنیم </h2>

                        <p className='text-md text-zinc-300 dark:text-gray-400 '>
                            در سریع‌ترین زمان ممکن پاسخگوی شما هستیم!
                            ارتباط مستقیم و بی‌واسطه با کارشناسان متخصص ۲۴ ساعته، ۷ روز هفته در خدمت شما
                        </p>

                        <ul className='flex flex-col gap-y-2 items-start justify-center'>
                            <l1 className="flex items-center justify-center gap-x-3 text-white mt-2">
                                <SiTicktick className='text-green-700 text-xl'/>
                                5+ سال تجربه مفید
                            </l1>
                            <l1 className="flex items-center justify-center gap-x-3 text-white">
                                <SiTicktick className='text-green-700 text-xl'/>
                                طراح وب حرفه‌ای
                            </l1>
                            <l1 className="flex items-center justify-center gap-x-3 text-white">
                                <SiTicktick className='text-green-700 text-xl'/>
                                تحویل به موقع
                            </l1>
                        </ul>

                    </div>
                </div>

                <div className="bg-red-500 h-[5rem] grid gap-x-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 xl:gap-y-5 w-[90%] lg:w-[65%] mx-5">
                </div>
            </div>

        </div>
    )
}

export default AboutSection