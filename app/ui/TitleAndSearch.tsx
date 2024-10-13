'use client'
import React, { useState } from 'react'

interface ReusableComponentProps {
    heading: string; // Text for the  <h2> element
    paragraph: string; // Text for the  <p> element
}

const TitleAndSearch: React.FC<ReusableComponentProps> = ({heading, paragraph}) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
    };
  return (
    <div className=' mb-6 flex justify-between items-center'>
        <div>
            <h2 className='font-semibold'>{heading}</h2>
            <p className='text-sm'>{paragraph}</p>
        </div>

        <div>
            <input type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full p-2 border rounded-lg" />
        </div>
    </div>
  )
}

export default TitleAndSearch