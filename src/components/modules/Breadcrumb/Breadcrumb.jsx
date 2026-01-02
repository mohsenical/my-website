import { MdOutlineShareLocation } from "react-icons/md";

function Breadcrumb({title}) {
    return (
        <div className='bg-white dark:bg-black/80 flex justify-center items-center w-full h-[50vh] text-gray-900/90 dark:text-gray-400'>
            <div className="flex gap-x-5 justify-center items-center h-[5rem] w-[20%] mt-30 *:text-2xl">
                <div className="flex gap-x-2 justify-center items-center h-full w-full">
                    <MdOutlineShareLocation className=" text-4xl text-slate-500 dark:text-green-900 mb-2"/>
                    <h4> صفعه اصلی </h4>
                </div>
                <div className="w-[4px] h-[50%] bg-zinc-900/50 dark:bg-white/20 rotate-15"></div>

                <h4 className="w-[50%]" > {title} </h4>
            </div>
        </div>
    )
}

export default Breadcrumb