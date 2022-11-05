import axios from 'axios'
import React from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'

export default function Row({title, fetchUrl,rowID}) {
  const [movies, setMovies] = React.useState([])

  React.useEffect(()=>{
     axios.get(fetchUrl).then((response)=>(
      setMovies(response.data.results)
     ))
  },[fetchUrl])

  const sliderLeft = () =>{
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const sliderRight = () =>{
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
 }

 
  return (
    <div className='p-4'>
        <h1 className=' py-4 text-white font-bold text-xl md:text-2xl'>{title}</h1>
        <div className = " relative flex items-center group">
          <MdChevronLeft onClick={sliderLeft} className=' bg-white left-0 rounded-full absolute opacity-70  hover:opacity-100 group-hover:block hidden cursor-pointer z-10 ' size={40}/>
          <div
            id={'slider' + rowID} 
            className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {
              movies?.map((item)=>(
                <>
                 <Movie item={item} />
                </>
              ))
            }
          </div>
          <MdChevronRight onClick={sliderRight}  className=' bg-white right-0 rounded-full absolute opacity-70 hover:opacity-100 group-hover:block hidden cursor-pointer z-10 ' size={40}/>
        </div>
    </div>
  )
}
