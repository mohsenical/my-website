

function ContactMeBox({ title, disc, icon }) {
    return (

        <div className="flex justify-center items-center gap-x-5 py-5 md:px-5 lg:px-1 bg-white/10 dark:bg-black/50 rounded-2xl">
            <div className="bg-slate-500 dark:bg-green-900  flex justify-center items-center p-3 rounded-full">
                <div className="text-2xl md:text-3xl xl:text-4xl text-white">
                    {icon}
                </div>
            </div>
            <div className="flex gap-y-1 flex-col justify-center items-start ">
                <p className='text-gray-400 text-md lg:text-lg'>{title}</p>
                <h2 className='text-sm lg:text-xl text-zinc-300 w-full'>{disc}</h2>
            </div>
        </div>
        
    )
}

export default ContactMeBox