import React from 'react'
import MovieDetailsHeading from './MovieDetailsHeading'
import PieChart from './PieChart'
import AgeRange from './AgeRange'
import TopLocations from './TopLocations'

const Audience = () => {
  return (
    <div className='mt-8'>
        <MovieDetailsHeading heading="Audience" paragraph='Specific gender, age range and top locations'/>

        <div className='mt-4 grid grid-cols-3 gap-4'>
            <PieChart />
            <AgeRange />
            <TopLocations />
        </div>
    </div>
  )
}

export default Audience