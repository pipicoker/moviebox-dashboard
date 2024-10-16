
import React from 'react'
import Heading from '../ui/Heading'
import MoviesBtns from '../ui/movies/MoviesBtns'
import MoviesBody from '../ui/movies/MoviesBody'

const page = () => {
  return (
    <div className='bg-[#FFFFFF]  px-[128px] max-[1280px]:px-[60px] pb-8'>
      <Heading heading='Movies'/>
      <MoviesBtns />
      <MoviesBody />
        
       
    </div>
  )
}

export default page
