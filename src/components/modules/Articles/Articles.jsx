import { Link } from "react-router-dom"

function Articles({ id, title, disc, image }) {
    return (
        <div className="flex flex-col justify-center items-center border-2 border-white/20 rounded-2xl overflow-hidden">
            <div className="w-full">
                <img src={image} className="w-full h-full rounded-t-2xl" />
            </div>
            <div className="flex flex-col gap-y-3 justify-center items-start p-2">
                <h3 className="text-lg text-white"> {title} </h3>
                <p className="text-md text-gray-400 border-r-2 border-green-900 pr-2 line-clamp-4 leading-7">
                    {disc}
                </p>

                <div className="flex my-2">
                    <Link to={`/blogs/${id}`}>
                        <button className="bg-slate-700 dark:bg-green-900 py-2 px-4 rounded-xl text-white dark:text-gray-400 hover:text-zinc-400 dark:hover:text-white transition-all cursor-pointer">بیشتر بخوانید ...</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Articles