import React from 'react'
import { Link } from 'react-router-dom'

function NewArticle({ id, date, image, alt, title }) {
    return (
        <Link to={`/blogs/${id}`}>
            <div className="flex justify-start items-center gap-x-2 w-[90%]">
                <img src={image} className='w-25 h-15' alt={alt} />
                <div className="flex flex-col justify-between gap-y-2 pr-1 p-2">
                    <p className='text-sm text-gray-400'>{title}</p>
                    <span className='text-sm text-gray-400 '>{ date }</span>
                </div>
            </div>
        </Link>
    )
}

export default NewArticle