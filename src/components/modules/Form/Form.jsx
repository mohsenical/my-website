

function Form() {
    return (
        <form className="grid gap-5 w-[90%] lg:w-[80%] mx-5">
            <div className="grid gap-x-4 gap-y-5 grid-cols-1 lg:grid-cols-2 *:flex *:flex-col *:space-y-1 ">
                <div className="">
                    <label className='text-gray-400' htmlFor="name">نام و نشان</label>
                    <input
                        className='px-4 py-2 rounded-xl bg-white/20 dark:bg-zinc-900 text-white placeholder-white/60 border border-white/30 focus:border-slate-500 dark:focus:border-green-900 focus:ring-2 focus:ring-slate-500 dark:focus:ring-green-900 outline-none transition'
                        type="text"
                        id='name'
                        placeholder='محسن پیغامی' />
                </div>

                <div className="">
                    <label className='text-gray-400' htmlFor="">ایمیل</label>
                    <input
                        className='px-4 py-2 rounded-xl bg-white/20 dark:bg-zinc-900 text-white placeholder-white/60 border border-white/30 focus:border-slate-500 dark:focus:border-green-900 focus:ring-2 focus:ring-slate-500 dark:focus:ring-green-900 outline-none transition'
                        type="email"
                        placeholder='mohsenical.web@gmail.com' />
                </div>

                <div className="">
                    <label className='text-gray-400' htmlFor="">موبایل</label>
                    <input
                        className='px-4 py-2 rounded-xl bg-white/20 dark:bg-zinc-900 text-white placeholder-white/60 border border-white/30 focus:border-slate-500 dark:focus:border-green-900 focus:ring-2 focus:ring-slate-500 dark:focus:ring-green-900 outline-none transition'
                        type="text"
                        placeholder='09145450730' />
                </div>

                <div className="">
                    <label className='text-gray-400' htmlFor="">موضوع</label>
                    <input
                        className='px-4 py-2 rounded-xl bg-white/20 dark:bg-zinc-900 text-white placeholder-white/60 border border-white/30 focus:border-slate-500 dark:focus:border-green-900 focus:ring-2 focus:ring-slate-500 dark:focus:ring-green-900 outline-none transition'
                        type="text"
                        placeholder='موضوع پیام شما' />
                </div>
            </div>
            <div className="w-full">
                <div className="w-full flex flex-col">
                    <label className='text-gray-400' htmlFor="">پیغام</label>
                    <textarea
                        className='px-4 py-2 rounded-xl bg-white/20 dark:bg-zinc-900 text-white placeholder-white/60 border border-white/30 focus:border-slate-500 dark:focus:border-green-900 focus:ring-2 focus:ring-slate-500 dark:focus:ring-green-900 outline-none transition'
                        name=""
                        id=""
                        placeholder='متن پیام شما'></textarea>
                </div>
            </div>

            <button className="h-10 rounded-xl text-lg text-white/60 bg-white/20 dark:bg-zinc-900 hover:bg-slate-600 dark:hover:bg-green-900 border border-white/40 hover:border-slate-800 dark:hover:border-green-800 cursor-pointer transition-all">ارسال</button>
        </form>
    )
}

export default Form