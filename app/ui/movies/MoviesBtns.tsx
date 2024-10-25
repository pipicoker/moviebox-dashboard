'use client'
import { useMovieStore } from '@/app/_store/buttonStore'

const MoviesBtns = () => {
    const {btn, setBtn} = useMovieStore()

    const buttonNames = [
        {
            id: 1,
            title: 'All movies'
        },
        {
            id: 2,
            title: 'Trending'
        },
        {
            id: 3,
            title: 'Upcoming Premier'
        },
    ]
  return (
    <div className='flex space-x-8 pt-6'>
       {buttonNames.map((button) => (

        <button
         key={button.id}
         onClick={() => setBtn(button.title)}
         className={`font-semibold  ${btn === button.title ? 'text-[#000000] ' : 'text-[#AAAAAA] '}`}>
            {button.title}
            <div className={` ${btn === button.title ? "w-full h-1 bg-gradient-to-r  from-[#FFA9A4]  via-[#8B9FE8]  to-[#35C3F3]  " : 'hidden'}`}>

            </div>
            
        </button>
       ))} 
    </div>
  )
}

export default MoviesBtns