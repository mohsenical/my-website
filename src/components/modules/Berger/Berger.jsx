function Berger({ sideBarOpen }) {
    return (
        <>
            <div className="flex justify-evenly flex-col w-7 h-7" onClick={sideBarOpen}>
                    <div className="w-full h-1 bg-zinc-700 rounded-2xl"></div>
                    <div className="w-full h-1 bg-zinc-700 rounded-2xl"></div>
                    <div className="w-full h-1 bg-zinc-700 rounded-2xl"></div>
            </div>
        </>
    )
}

export default Berger