import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

function AosAnimation () {
    return (
        useEffect(() => {
            Aos.init()
        }, [])
    )
}

export default AosAnimation