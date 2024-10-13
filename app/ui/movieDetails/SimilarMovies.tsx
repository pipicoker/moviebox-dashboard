"use client"
import { useState} from 'react'
import Image from 'next/image'
import Table from '../Table'
import { usePopularMovieStore } from '@/app/_store/movieStore'
import ViewBtn from '../ViewBtn'

import MovieDetailsHeading from './MovieDetailsHeading'

const SimilarMovies = () => {

    const {popularMovies, loading, error, } = usePopularMovieStore()
    // const [ setFilteredData] = useState<string[]>([]); 


    const columns = [
      { title: 'Name', key: 'Name' },
      { title: 'Category', key: 'Category' },
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

    const imageLinks = ['https://plus.unsplash.com/premium_photo-1680087014917-904bb37c5191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1465145177017-c5b156cd4d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D'

    ]


  // Function to return background colors for specific genres

    const getGenreClass = (genre: string) => {
        switch (genre.toLowerCase()) {
          case 'crime':
            return 'bg-[#D1D8F7] text-[#4755A8]';
          case 'drama':
            return 'bg-[#D1D8F7] text-[#4755A8]';
          case 'comedy':
            return 'bg-[#D1D8F7] text-[#4755A8]';
          default:
            return 'bg-[#D1D8F7] text-[#4755A8]'; // Default color for other genres
        }
      };

        // Component to handle genres with "Show More" functionality
      const GenreDisplay: React.FC<{ genres: string[] }> = ({ genres }) => {
        const [showAll, setShowAll] = useState(false);
    
        // If there are more than 2 genres
        if (genres.length > 2) {
          return (
            <div className="flex flex-wrap items-center">
              {/* Display only the first genre */}
              <span className={`rounded-full px-3 py-1 mr-2 ${getGenreClass(genres[0])}`}>
                {genres[0].trim()}
              </span>
              {/* Show "+X more" button if there are more genres */}
              {!showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  className="text-blue-600  hover:text-blue-800"
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
                      className={`rounded-full px-3 py-1 mr-2 ${getGenreClass(genre)}`}
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
            <div className="flex flex-wrap items-center">
              {genres.map((genre, index) => (
                <span
                  key={index}
                  className={`rounded-full px-3 py-1 mr-2 ${getGenreClass(genre)}`}
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

    
    
    const selectedData = popularMovies.map((movie) => {
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
            <span>{movie.title}</span>
        </div>
    ),
    Category: <GenreDisplay genres={movie.genres.map((genre) => genre.name)} />,
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

    // Function to shuffle the array
const shuffleArray = (array: any) => {
    return array.sort(() => Math.random() - 0.5);
  };
  
  // Shuffle the array and pick the first 3 movies
  const displayedMovies = shuffleArray(selectedData).slice(0, 3);
  


    // const handleSearch = (query: string) => {
    //     // Example search function: filter data based on the search query
    //     const sampleData = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    //     const filtered = sampleData.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    //     setFilteredData(filtered);
    // };

  return (
    <div className='mt-8'>
        <MovieDetailsHeading heading='Similar Movies' paragraph='Keep track of the trending movies on moviebox'/>

        <div className='border rounded-lg mt-4'>
            <div className='rounded-t-lg'>
              <Table columns={columns} data={displayedMovies} hasPopularity={false} />
          </div>
        </div>
    </div>
  )
}

export default SimilarMovies