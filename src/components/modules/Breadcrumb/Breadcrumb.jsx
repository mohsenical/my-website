import { MdOutlineShareLocation } from "react-icons/md";
import { ReactTyped } from "react-typed";

function Breadcrumb({ title }) {
    return (
        <div className='bg-white dark:bg-black/80 flex justify-center items-center w-full h-[50vh] text-gray-900/90 dark:text-gray-400'>
            <div className="flex justify-center items-center gap-x-4 h-[5rem] mt-30 *:text-2xl">
                <div className="flex gap-x-2 justify-center items-center">
                    <MdOutlineShareLocation className=" text-4xl text-slate-500 dark:text-green-900 mb-2" />
                    <h4  className='text-xl lg:text-2xl xl:text-3xl text-gray-900 dark:text-zinc-400'> صفعه اصلی </h4>
                </div>
                <div className="w-[4px] h-[50%] bg-zinc-900/50 dark:bg-white/20 rotate-15"></div>

                <ReactTyped className='mx-3 text-xl lg:text-2xl xl:text-3xl text-gray-900 dark:text-zinc-400'
                    strings={[title]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                />

            </div>
        </div>
    )
}

export default Breadcrumb