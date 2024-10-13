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
    <div className='flex space-x-4 pt-6'>
       {buttonNames.map((button) => (

        <button
         key={button.id}
         onClick={() => setBtn(button.title)}
         className={` ${btn === button.title ? 'text-[#000000] ' : 'text-[#6A6A6A]'}`}>
            {button.title}
            <div className={` ${btn === button.title ? "w-full h-1 bg-gradient-to-r from-[#35C3F3] to-[#8B9FE8] to-[#E681D8] to-[#FFA9A4] to-[#FED2CE] to-[#FED2CE]" : 'hidden'}`}>

            </div>
            
        </button>
       ))} 
    </div>
  )
}

export default MoviesBtns