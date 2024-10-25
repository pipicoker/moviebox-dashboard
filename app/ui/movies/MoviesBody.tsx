'use client'
import {useEffect, useState, useMemo} from 'react'
import Image from 'next/image'
import Table from '../Table'
import ViewBtn from '../ViewBtn'
import TitleAndSearch from '../TitleAndSearch'
import { useMovieStore } from '@/app/_store/buttonStore'
import { useUpcomingMovieStore } from '@/app/_store/movieStore'
import { usePopularMovieStore } from '@/app/_store/movieStore'
import trend from '../../../public/trend.jpg'
import { TableRow } from '../Table'



const MoviesBody = () => {
  const { btn } = useMovieStore();
  const { upcomingMovies, loading, error, fetchUpcomingMoviesDetails } = useUpcomingMovieStore();
  const { popularMovies, fetchPopularMoviesDetails } = usePopularMovieStore();

  // Memoize allMovies to avoid unnecessary recalculations
  const allMovies = useMemo(() => {
      return [...upcomingMovies, ...popularMovies];
  }, [upcomingMovies, popularMovies]);

  const [movies, setMovies] = useState(allMovies);

    useEffect(() => {
        if(btn == 'All movies') {
            setMovies(allMovies)
        } else if (btn == 'Trending') {
            setMovies(popularMovies)
        } else {
            setMovies(upcomingMovies)
        }
    },[btn])
    

    const [showAllMovies, setShowAllMovies] = useState(false)
    useEffect(() => {
      fetchUpcomingMoviesDetails()    
        
    }, [fetchUpcomingMoviesDetails])

    useEffect(() => {
        fetchPopularMoviesDetails()    
          
      }, [fetchPopularMoviesDetails])


      const columns: { title: string | JSX.Element; key: keyof TableRow }[] = [
        { title: (
          <div className='flex items-center space-x-[10px]'>
            <div className='w-[14px] h-[14px] border border-[#E0E0E0] rounded'></div>
            <span className='text-semibold'>Name</span>
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.6602 9.72266L6.59765 14.7852C6.43843 14.9423 6.22372 15.0304 6 15.0304C5.77628 15.0304 5.56156 14.9423 5.40234 14.7852L0.339843 9.72266C0.181334 9.56415 0.0922852 9.34916 0.0922852 9.125C0.0922852 8.90083 0.181334 8.68585 0.339843 8.52734C0.498351 8.36884 0.713334 8.27979 0.937499 8.27979C1.16166 8.27979 1.37665 8.36884 1.53515 8.52734L5.15625 12.1484V1.8125C5.15625 1.58872 5.24514 1.37411 5.40338 1.21588C5.56161 1.05764 5.77622 0.96875 6 0.96875C6.22377 0.96875 6.43838 1.05764 6.59662 1.21588C6.75485 1.37411 6.84375 1.58872 6.84375 1.8125V12.1484L10.4648 8.52734C10.6233 8.36884 10.8383 8.27979 11.0625 8.27979C11.2867 8.27979 11.5016 8.36884 11.6602 8.52734C11.8187 8.68585 11.9077 8.90083 11.9077 9.125C11.9077 9.34916 11.8187 9.56415 11.6602 9.72266V9.72266Z" fill="black"/>
            </svg>
  
          </div>
        ),
         key: 'Name' },
        { title: 'Category', key: 'Category' },
        { title: 'Popularity/Interest', key: 'Popularity' },
        { title: 'Watchlists', key: 'Watchlists' },
        { title: 'Streams', key: 'Streams' },
        { title: 'Release Date', key: 'ReleaseDate' },
      ];

    if(loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    const imageLinks = ['https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1669357657874-34944fa0be68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1709884735017-114f4a31f944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D', 'https://plus.unsplash.com/premium_photo-1680087014917-904bb37c5191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1465145177017-c5b156cd4d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D'

    ]

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
    

      // const handleViewClick = (movie: any) => {
      //   alert(`viewing details for movie: ${movie.title}`)
      // }

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

    

      const selectedData = movies.map((movie) => {
        // Select a random image link
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
              <span className='text-sm font-semibold text-[#000000]'>{movie.title}</span>
          </div>
      ),
      Category: <GenreDisplay genres={movie.genres.map((genre) => genre.name)} />,
      Popularity: (
        <div className='flex space-x-2'>
          <div className='flex'>|||||| <span className='text-gray-300'>|||</span></div>
          <div className={`${movie.vote_count >= 200 ? 'flex items-center space-x-2' : 'hidden'}`}>
            <Image src={trend} alt='trend icon' width={18} height={18}/>
            <div className='text-xs text-[#7281D3] font-semibold'>Trending</div>
          </div>
        </div>
    ),
    Watchlists: movie.vote_count,
    Streams: movie.runtime,
    ReleaseDate: (
        <div className="flex items-center justify-between space-x-4">
            <span>{formatDate(movie.release_date)}</span>
            <ViewBtn movie={movie} image={randomImage}/>
        </div>
    ),
    }
        
        
    })

    // Only show the first four movies if not showing all
    const displayedMovies = showAllMovies ? selectedData : selectedData.slice(0, 13)

    // const handleSearch = (query: string) => {
    //     // Example search function: filter data based on the search query
    //     const sampleData = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    //     const filtered = sampleData.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    //     // setFilteredData(filtered);
    // };
  return (
    <div>
      <div className='mt-8'>
        <TitleAndSearch 
          heading='Collection of all movies'
          paragraph='Keep track of all movies on moviebox'
          />
      </div>
        
      <div className='border rounded-lg'>
        <div className='rounded-t-lg'>
              <Table columns={columns} data={displayedMovies} hasPopularity={true}/>
          </div>
          

          {/* Button to toggle between showing all and showing fewer */}
          <div className='p-4 bg-[#F5F5F5] text-sm font-semibold flex justify-center items-center'>
          {!showAllMovies ? (
              <button 
              onClick={() => setShowAllMovies(true)}
              className='px-4 py-2 rounded-lg border border-[#E0E0E0] bg-[#FFFFFF]'>
                  Load More
              </button>
          ) : (
              <button 
              onClick={() => setShowAllMovies(false)}
              className='px-4 py-2 rounded-lg border border-[#E0E0E0]'>
                  Show less
              </button>
          )}
          </div>

      </div>
        
    </div>

    
  )


}

export default MoviesBody