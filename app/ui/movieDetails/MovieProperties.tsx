"use client"
import { useState } from 'react'
import Image from 'next/image'
import MovieDetailsTable from './MovieDetailsTable'
import MovieDetailsHeading from './MovieDetailsHeading'
import { UseViewMovieStore } from '@/app/_store/viewMovieStore'
import trend from '../../../public/trend.jpg'
import { DetailsTableRow } from './MovieDetailsTable'

const MovieProperties = () => {
    const {movieDetails} = UseViewMovieStore()

    // Check if movieDetails is null
  if (!movieDetails) {
    return <div>No movie selected</div>;
  }

    // Define columns with display names
    const columns: { title: string; key: keyof DetailsTableRow }[] = [
    { title: 'Category', key: 'Category' },
    { title: 'Streams', key: 'Streams' },
    { title: 'Watchlists', key: 'Watchlists' },
    { title: 'Owner', key: 'Owner' },
    { title: 'Release Date', key: 'ReleaseDate' },
  ];

    // Function to return background colors for specific genres
     // Function to return background colors for specific genres

     const getGenreClass = (genre: string) => {
      switch (genre.toLowerCase()) {
        case 'crime':
          return 'bg-[#D1D8F7] ';
        case 'drama':
          return 'bg-[#D1D8F7]  ';
        case 'comedy':
          return 'bg-[#D1D8F7] ';
        default:
          return 'bg-[#D1D8F7] '; // Default color for other genres
      }
    };

      


    const GenreDisplay: React.FC<{ genres: string[] }> = ({ genres }) => {
      // Component to handle genres with "Show More" functionality
      const [showAll, setShowAll] = useState(false);
      
      // If there are more than 2 genres
      if (genres.length > 2) {
        return (
          <div className="flex flex-wrap items-center uppercase font-semibold text-[#4755A8] text-[10px] ">
            {/* Display only the first genre */}
            <span className={`rounded-full px-4 py-1 mr-2 ${getGenreClass(genres[0])}`}>
              {genres[0].trim()}
            </span>
            {/* Show "+X more" button if there are more genres */}
            {!showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="text-[#4755A8] text-xs font-semibold"
              >
                +{genres.length - 1} more
              </button>
            )}
            {/* If "Show More" is clicked, display the rest */}
            {showAll && (
              <>
                {genres.slice(1).map((genre, index) => (
                  <span
                    key={index}
                    className={`rounded-full px-4 py-1 mr-2 my-2 ${getGenreClass(genre)}`}
                  >
                    {genre.trim()}
                  </span>
                ))}
              </>
            )}
          </div>
        );
      } else {
        // If there are 2 or fewer genres, just display them all
        return (
          <div className="flex flex-wrap items-center uppercase font-semibold text-[#4755A8] text-[10px] ">
            {genres.map((genre, index) => (
              <span
                key={index}
                className={`rounded-full px-3 py-1 mr-2  ${getGenreClass(genre)}`}
              >
                {genre.trim()}
              </span>
            ))}
          </div>
        );
      }
    };
      

      // Helper function to get the correct ordinal suffix
      const getOrdinal = (day: number) => {
        if (day > 3 && day < 21) return 'th'; // Special case for 11th-13th
        switch (day % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
        }
      };

      // Function to format the date as "7th, Sep 2024"
      const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' }); // Short month format (Sep)
        const year = date.getFullYear();
        
        return `${day}${getOrdinal(day)}, ${month} ${year}`;
      };

    const selectedData =  [{
        
        Category: <GenreDisplay genres={movieDetails.genres.map((genre) => genre.name)} />,
        Watchlists: movieDetails.vote_count,
        Owner: movieDetails.production_companies[0].name,
        ReleaseDate: (
            <div className="flex items-center justify-between space-x-4">
               <span>{formatDate(movieDetails.release_date)}</span>
            </div>
        ),
        Streams: movieDetails.runtime,

        
        
    }]

  return (
    <div className='mt-8'>
        <div className='flex justify-between items-center'>
            <MovieDetailsHeading heading='Movie Properties' paragraph='A list of details for the movie'/>

            <div className='flex space-x-2 items-center'>
                <div className='flex'>|||||| <span className='text-gray-300'>|||</span></div>
                
                <div className='flex items-center space-x-2' >
                <Image src={trend} alt='trend icon' width={18} height={18}/>
                <div className='text-xs text-[#7281D3] font-semibold'>Trending</div>
                </div>
          </div>
        </div>
        
        <MovieDetailsTable columns={columns} data={selectedData} />
    </div>
  )
}

export default MovieProperties