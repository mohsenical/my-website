import { SiTicktick } from "react-icons/si";
import Form from "../../modules/Form/Form";

function AboutSection() {
    return (
        <div className=" h-[screen] pb-15 px-5 md:px-24 w-full ">
            <div
                data-aos="zoom-in"
                className="flex flex-col xl:flex-row gap-x-0 md:gap-x-5 gap-y-5 justify-center items-center mx-auto w-[95%] md:w-[80%] lg-[20%] py-10 bg-white/10 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-md"
            >

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
                                <SiTicktick className='text-slate-500 dark:text-green-700 text-xl' />
                                5+ سال تجربه مفید
                            </l1>
                            <l1 className="flex items-center justify-center gap-x-3 text-white">
                                <SiTicktick className='text-slate-500 dark:text-green-700 text-xl' />
                                طراح وب حرفه‌ای
                            </l1>
                            <l1 className="flex items-center justify-center gap-x-3 text-white">
                                <SiTicktick className='text-slate-500 dark:text-green-700 text-xl' />
                                تحویل به موقع
                            </l1>
                        </ul>

                    </div>
                </div>

                <Form />
            </div>

        </div>
    )
}

export default AboutSection