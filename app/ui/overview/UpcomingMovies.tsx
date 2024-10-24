"use client"
import Image from 'next/image'
import {useEffect, useState} from 'react'
import Table from '../Table'
import TitleAndSearch from '../TitleAndSearch'
// import {useMovieStore} from '../../_store/'
import { useUpcomingMovieStore } from '@/app/_store/movieStore'
import { TableRow } from '../Table'

import ViewBtn from '../ViewBtn'

const UpcomingMovies: React.FC = () => {
    const {upcomingMovies, loading, error, fetchUpcomingMoviesDetails} = useUpcomingMovieStore()
    


    const [showAllMovies, setShowAllMovies] = useState(false)
    useEffect(() => {
      fetchUpcomingMoviesDetails()    
        
    }, [fetchUpcomingMoviesDetails])


    const columns: { title: string; key: keyof TableRow }[] = [
      { title: 'Name', key: 'Name' },
      { title: 'Category', key: 'Category' },
      { title: 'Watchlists', key: 'Watchlists' },
      { title: 'Owner', key: 'Owner' },
      { title: 'Premier Date', key: 'PremierDate' },
    ];
    

    if(loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    const imageLinks = ['https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1669357657874-34944fa0be68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1709884735017-114f4a31f944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'

    ]


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
      
         // Updated selectedData mapping to select a random image for each movie
        const selectedData = upcomingMovies.map((movie) => {
          // Select a random image link for each movie
          const randomImage = imageLinks[Math.floor(Math.random() * imageLinks.length)];

          return {
              Name: (
                  <div className="flex items-center space-x-4">
                      <Image
                          src={randomImage}
                          alt='pix'
                          width={32}
                          height={32}
                          className='rounded-3xl object-cover aspect-square'
                      />
                      <span>{movie.title}</span>
                  </div>
              ),
              Category: <GenreDisplay genres={movie.genres.map((genre) => genre.name)} />,
              Watchlists: movie.vote_count,
              Owner: movie.production_companies[0].name,
              PremierDate: (
                  <div className="flex items-center justify-between space-x-4">
                      <span>{formatDate(movie.release_date)}</span>
                      <ViewBtn movie={movie} image={randomImage} />
                  </div>
              ),
          };
        });



    // Only show the first four movies if not showing all
    const displayedMovies = showAllMovies ? selectedData : selectedData.slice(0, 4)


    // const handleSearch = (query: string) => {
    //     // Example search function: filter data based on the search query
    //     const sampleData = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    //     const filtered = sampleData.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    // };

  return (
    <div className='mt-16 '>
      <div>
          <TitleAndSearch 
          heading='Upcoming movie premiers'
          paragraph='Keep track of the upcoming movie premiers'
          />
        </div>

      <div className='border rounded-lg'>
        <div className='rounded-t-lg'>
            <Table columns={columns} data={displayedMovies} hasPopularity={false}/>
        </div>
        

        {/* Button to toggle between showing all and showing fewer */}
        <div className='p-4 bg-[#F5F5F5] text-sm font-semibold text-right'>
        {!showAllMovies ? (
            <button 
            onClick={() => setShowAllMovies(true)}
            className='px-4 py-2 rounded-lg border'>
                View All Upcoming movies
            </button>
        ) : (
            <button 
            onClick={() => setShowAllMovies(false)}
            className='px-4 py-2 rounded-lg border'>
                Show less
            </button>
        )}
        </div>
      </div>
      
        
    </div>
  )
}

export default UpcomingMovies