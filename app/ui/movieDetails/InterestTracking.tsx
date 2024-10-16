import MovieDetailsTable from './MovieDetailsTable'
import MovieDetailsHeading from './MovieDetailsHeading'
import { UseViewMovieStore } from '@/app/_store/viewMovieStore'
import { DetailsTableRow } from './MovieDetailsTable'
const InterestTracking = () => {
    const {movieDetails} = UseViewMovieStore()

    // Check if movieDetails is null
  if (!movieDetails) {
    return <div>No movie selected</div>;
  }

    // Define columns with display names
    const columns: { title: string; key: keyof DetailsTableRow }[] = [
    { title: 'People Reached', key: 'PeopleReached' },
    { title: 'Content Interactions', key: 'ContentInteractions' },
    { title: 'Impressions', key: 'Impressions' },
    { title: 'Shares', key: 'Shares' },
    { title: 'Likes', key: 'Likes' },
  ];

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