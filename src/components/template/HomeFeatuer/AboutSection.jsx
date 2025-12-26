import HeaderSctionBody from '../../modules/HeaderSctionBody/HeaderSctionBody'

function AboutSection() {
    return (
        <div className=" my-10 py-10 bg-white dark:bg-black w-full ">

            <HeaderSctionBody title="درباره من" desc="توضیعات و سابقه کار" />

            <div className=" flex w-[90%] mx-auto my-10">
                <div className="w-[60%] h-[15rem] bg-red-500"></div>
                <div className="w-[40%] h-[15rem] bg-green-500"></div>
            </div>

        </div>
    )
}

export default AboutSection