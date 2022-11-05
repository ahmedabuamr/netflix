import React from 'react'
import {FaHeart , FaRegHeart} from 'react-icons/fa'

export default function Movie({item}) {
    const [like , setLike] = React.useState(false)
    return (
        <div key = {item.id} className=' w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2  relative'>
            <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
            />
            <div className=' absolute w-full h-full top-0 left-0 hover:bg-black/80 hover:opacity-100 opacity-0 ' >
                <p className=' text-white h-full text-xs md:text-sm font-bold flex justify-center text-center items-center'>{item?.title}</p>
                <p>
                    {like ? <FaHeart className=" absolute top-4 left-4 text-gray-300"/> : <FaRegHeart className=" absolute top-4 left-4 text-gray-300"/>}
                </p>
            </div>
        </div>
    )
}
