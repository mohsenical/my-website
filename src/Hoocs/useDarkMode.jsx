import { useEffect, useState } from "react"

function useDarkMode() {

    const getLocalStorage = () => {
        const value = localStorage.getItem("theme")

        if (value) return value === "dark"

        return window.matchMedia("(prefres-color-scheme: dark)").matches
    }

    const [isDark, setIsDark] = useState(getLocalStorage)

    useEffect(() => {
        const root = document.documentElement;

        if (isDark) {
            localStorage.setItem("theme", "dark")
            root.classList.add("dark")
            root.classList.add("bg-zinc-900")
        } else {
            root.classList.remove("dark")
            localStorage.setItem("theme", "light")
            root.classList.remove("bg-zinc-900")
        }
    }, [isDark])

    const toogleDarkMode = () => {
        setIsDark(prev => !prev)
    }


    return {isDark, toogleDarkMode}
}

export default useDarkMode