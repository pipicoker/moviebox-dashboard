import { useState } from 'react'
import MovieDetailsTable from './MovieDetailsTable'
import MovieDetailsHeading from './MovieDetailsHeading'
import { useViewMovieStore } from '@/app/_store/viewMovieStore'
const InterestTracking = () => {
    const {movieDetails} = useViewMovieStore()

    // Check if movieDetails is null
  if (!movieDetails) {
    return <div>No movie selected</div>;
  }

    // Define columns with display names
  const columns = [
    { title: 'People Reached', key: 'PeopleReached' },
    { title: 'Content Interactions', key: 'ContentInteractions' },
    { title: 'Impressions', key: 'Impressions' },
    { title: 'Shares', key: 'Shares' },
    { title: 'Likes', key: 'Likes' },
  ];

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
      

    const GenreDisplay: React.FC<{ genres: string[] }> = ({ genres }) => {
        // Component to handle genres with "Show More" functionality
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

    const selectedData =  [{
        
        PeopleReached:movieDetails.budget ,
        ContentInteractions: movieDetails.revenue,
        Owner: movieDetails.production_companies[0].name,
        Impressions: movieDetails.vote_count,
        Shares: movieDetails.runtime,
        Likes: movieDetails.vote_count,

        
        
    }]
  return (
    <div className='mt-8'>
        <MovieDetailsHeading heading='Interest Tracking Insights' paragraph='Keep track of the insights on this movie'/>

        <MovieDetailsTable columns={columns} data={selectedData}/>
    </div>
  )
}

export default InterestTracking