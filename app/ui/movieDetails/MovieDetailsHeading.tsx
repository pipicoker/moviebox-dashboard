import React from 'react'

interface ReusableComponentProps {
    heading: string; // Text for the  <h2> element
    paragraph: string; // Text for the  <p> element
}

const MovieDetailsHeading: React.FC<ReusableComponentProps> = ({heading, paragraph}) => {
  return (
    <div className=''>
        <h2 className='font-semibold text-[#000000]'>{heading}</h2>
        <p className='text-sm text-[#6A6A6A]'>{paragraph}</p>
    </div>
  )
}

export default MovieDetailsHeading