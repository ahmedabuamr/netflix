import axios from 'axios'
import React from 'react'
import requests from '../Request'
export default function () {

    const [movies, setMovies] = React.useState([])

    const getMovies = async () => {
        await axios.get(requests.requestHorror).then((response) => (
            setMovies(response.data.results)
        ))
    }

    React.useEffect(() => {
        getMovies()
    }, [])

    const movie = movies[Math.floor(Math.random() * movies.length)]



    return (
        <div className=' w-full  h-[600px] text-white'>
            <div className=' w-full h-full'>
             <div className=' absolute  w-full h-[600px] bg-gradient-to-r from-black'></div>
                <img
                    className='w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className=' absolute top-[20%] p-4 md:p-8'>
                    <h1 className=' text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='mt-6'>
                        <button className=' bg-gray-300 border-gray-300 text-black px-6 py-2 '>Play</button>
                        <button className=' border ml-4 border-gray-300 text-white px-6 py-2 '>Witch Later</button>
                    </div>
                    <p className=' my-4 text-gray-300 text-sm'>Released : {movie?.release_date}</p>
                    <p className=' md:w-[60%]'>{movie?.overview}</p>
                </div>
            </div>
        </div>
    )
}
