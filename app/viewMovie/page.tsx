"use client";
import Image from 'next/image';
import { UseViewMovieStore } from '../_store/viewMovieStore'
import Heading from '../ui/Heading';
import AreaChart from '../ui/AreaChart';
import MovieProperties from '../ui/movieDetails/MovieProperties';
import InterestTracking from '../ui/movieDetails/InterestTracking';
import Audience from '../ui/movieDetails/Audience';
import SimilarMovies from '../ui/movieDetails/SimilarMovies';

const page = () => {
  const {movieDetails, selectedImage} = UseViewMovieStore()
  
  if (!movieDetails) {
    return <div>No movie selected</div>;
  } 

  // Provide a default image URL in case selectedImage is null
  const defaultImage = 'https://via.placeholder.com/500'; // Use a placeholder image URL
  const imageUrl = selectedImage || defaultImage; // Use the selected image or fallback

  // This check ensures any client-side code executes safely
  if (typeof window !== 'undefined') {
    // You can use window here
    console.log(window.location.href); 
  }
  return (
    <div className='bg-[#FFFFFF]  px-[128px] max-[1280px]:px-[60px] pb-8'>
      <Heading heading={movieDetails.title}/>


      <div className="mt-8 max-h-[364px] grid grid-cols-7 gap-8">
          <div className="col-span-2">
            <Image src={imageUrl} alt='movie cover' width={356} height={364} className='h-full max-h-[358px] w-[356px] rounded-lg'/>
          </div>
          
          <div className="col-span-5">
            <AreaChart />
          </div>
        
      </div>

      <MovieProperties />
      <InterestTracking />

      <Audience />
      <SimilarMovies />
    </div>
  )
}

export default page