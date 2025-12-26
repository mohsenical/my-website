import { useEffect, useState } from 'react'

function useTopbarFixed() {

    const [fixTop, setFixTop] = useState(false)


    useEffect(() => {

        const fixNavbarToTop = () => {
            const currentScroll = window.pageYOffset            

            if (currentScroll > 90) {
                setFixTop(true)
            } else {
                setFixTop(false)
            }
        }

        window.addEventListener("scroll", fixNavbarToTop)
        return () => removeEventListener("scroll", fixNavbarToTop)
    }, [])


    return  { fixTop }
}

export default useTopbarFixed