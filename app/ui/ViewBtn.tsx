import React from 'react'
import Link from 'next/link'
import { UseViewMovieStore } from '../_store/viewMovieStore'
import { MovieDetails } from '../_store/viewMovieStore'

interface ViewBtnProps {
    movie: MovieDetails; 
    image: string
  }
const ViewBtn: React.FC<ViewBtnProps> = ({movie, image}) => {
    const {  setMovieDetails } = UseViewMovieStore();

    const handleViewClick = () => {
        setMovieDetails(movie, image);
        // console.log(movie, image);
      }
  return (
    <div>
        <Link href="/viewMovie">  
            <button
            onClick={handleViewClick}
            className="text-sm font-semibold px-4 py-2 rounded-lg border "
            >
            View
            </button>
        </Link>
        
    </div>
  )
}

export default ViewBtn