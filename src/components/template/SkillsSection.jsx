import { skillsData } from '../../Data/skillsData';
import BoxSkills from '../modules/BoxSkills/BoxSkills';

function SkillsSection() {
    return (
        <div className=" h-[screen] pb-5 px-5 md:px-20 w-full ">


            <div
                data-aos="zoom-in"
                className="flex flex-col xl:flex-row gap-x-0 md:gap-x-5 gap-y-5 justify-center items-center mx-auto w-[95%] md:w-[90%] py-4 md:py-5 lg:py-10 bg-white/10 dark:bg-black/50 rounded-2xl overflow-hidden shadow-md"
            >

                <div className="w-[90%] lg:w-[90%] xl:w-[40%] mx-10">
                    <div className="w-full flex flex-col gap-y-3 justify-center items-start">
                        <h3 className='text-xl text-zinc-300 dark:text-gray-400'>مهارت‌های من</h3>
                        <h2 className='text-2xl text-zinc-300 dark:text-white mb-4'> <span className='text-slate-500 dark:text-green-700'>کاوش مهارت‌های </span> محبوب </h2>

                        <p className=' text-zinc-300 dark:text-gray-400 mb-4'>
                            در دنیای پررقابت امروز، مهارت‌های تخصصی و تجربه عملی، کلید موفقیت در هر زمینه‌ای محسوب می‌شوند. من با بهره‌گیری از دانش به‌روز و خلاقیت بی‌پایان، همواره در پی خلق راهکارهای نوآورانه و مؤثر هستم.
                        </p>

                        <p className=' text-zinc-300 dark:text-gray-400'>
                            تعهد به کیفیت، دقت در اجرا و توجه به جزئیات، اصولی هستند که در تمام مراحل کارم رعایت می‌کنم تا بهترین نتایج ممکن را برای پروژه‌ها به ارمغان آورم.
                        </p>
                    </div>
                </div>

                <div className="grid gap-x-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 xl:gap-y-5 w-[90%] lg:w-[65%] mx-5">

                    {
                        skillsData.map(box => (
                            <div key={box.id}>
                                <BoxSkills {...box} />
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default SkillsSection