import { FaChevronUp } from "react-icons/fa";
import useTopbarFixed from "../../../Hoocs/useTopbarFixed";
import clsx from "clsx";

function ScrollTopBtn() {

    const { fixTop } = useTopbarFixed()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>

            {
                fixTop && (

                    <div
                        className={clsx(" *:transition-all fixed right-[1rem] bottom-[2rem] flex justify-center items-center w-12 h-12 p-2 shadow rounded-full bg-slate-700 dark:bg-green-900 text-white dark:text-zinc-400 dark:hover:text-white hover:text-gray-400 cursor-pointer", fixTop ? "opacity-100 block" : "opacity-0 hidden")}
                        onClick={scrollToTop}
                    >

                        <FaChevronUp className="text-2xl" />

                    </div>
                )
            }

        </>
    )

}

export default ScrollTopBtn