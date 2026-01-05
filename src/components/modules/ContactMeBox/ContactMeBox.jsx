import { FaWhatsapp } from "react-icons/fa";


function ContactMeBox() {
    return (

        <div className="flex justify-center items-center gap-x-5 py-5 md:px-5 lg:px-1 bg-white/10 dark:bg-black/50 rounded-2xl">
            <div className="bg-slate-500 dark:bg-green-900  flex justify-center items-center p-3 rounded-full">
                <FaWhatsapp className=' text-2xl md:text-3xl xl:text-4xl text-white' />
            </div>
            <div className="flex gap-y-1 flex-col justify-center items-start ">
                <p className='text-gray-400 text-md lg:text-lg'>تلگرام</p>
                <h2 className='text-sm lg:text-xl text-white w-full'>0914-149-3036</h2>
            </div>
        </div>
        
    )
}

export default ContactMeBox