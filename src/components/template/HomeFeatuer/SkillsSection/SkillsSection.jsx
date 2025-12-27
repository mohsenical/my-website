import React from 'react'
import HeaderSctionBody from '../../../modules/HeaderSctionBody/HeaderSctionBody'

function SkillsSection() {
    return (
        <div className=" my-10 py-10 bg-white dark:bg-black w-full ">

            <HeaderSctionBody title="مهارت های من" desc="مهارت ها و تکنولوژی ها" />

            <div className=" flex w-[90%] mx-auto my-10">

                <table className='flex flex-col justify-center items-center w-full py-5'>
                    <thead className='flex items-center justify-evenly w-[90%]' >
                        <tr className='flex items-center justify-start gap-x-20 w-full px-5 py-2 *:py-5 *:text-center *:text-2xl border-r-2 border-r-green-700 '>
                            <th className='text-green-700'>ID</th>
                            <th className='text-green-700'>تکنولوژی</th>
                            <th className='text-green-700'>سال فعالیت</th>
                        </tr>
                    </thead>
                    <tbody className='flex flex-col items-center justify-evenly w-[90%] '>
                        <tr className='flex items-center justify-start gap-x-24 w-full px-5 py-2 *:py-5 *:text-center *:text-xl border-r-2 border-r-green-700 '>
                            <td>1</td>
                            <td>react.js</td>
                            <td>2 سال</td>
                        </tr>


                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default SkillsSection