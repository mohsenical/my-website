import { MdOutlineShareLocation } from "react-icons/md";

function Breadcrumb() {
    return (
        <div className='bg-black/80 flex justify-center  items-center w-full h-[50vh] text-gray-400'>
            <div className="flex gap-x-5 justify-center items-center h-[5rem] *:text-2xl">
                <div className="flex gap-x-2 justify-center items-center h-full w-[100%]">
                    <MdOutlineShareLocation className=" text-4xl text-green-900 mb-2"/>
                    <h4> صفعه اصلی </h4>
                </div>
                <div className="w-[4px] h-[50%] bg-white/20 rotate-15"></div>

                <h4 className=''> خدمات </h4>
            </div>
        </div>
    )
}

export default Breadcrumb