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
            <p className='text-sm text-[#6A6A6A]'>{paragraph}</p>
        </div>
        
        <form >   
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3477 15.1524L13.4859 12.2906C14.4102 11.1111 14.9105 9.65477 14.9063 8.15626C14.9063 6.82123 14.5104 5.51619 13.7687 4.40615C13.027 3.29612 11.9728 2.43096 10.7394 1.92007C9.50597 1.40917 8.14877 1.2755 6.8394 1.53595C5.53002 1.7964 4.32729 2.43928 3.38328 3.38328C2.43928 4.32729 1.7964 5.53002 1.53595 6.8394C1.2755 8.14877 1.40917 9.50597 1.92007 10.7394C2.43096 11.9728 3.29612 13.027 4.40615 13.7687C5.51619 14.5104 6.82123 14.9063 8.15625 14.9063C9.65477 14.9105 11.1111 14.4102 12.2906 13.4859L15.1523 16.3477C15.3116 16.5048 15.5263 16.5929 15.75 16.5929C15.9737 16.5929 16.1884 16.5048 16.3477 16.3477C16.4263 16.2693 16.4887 16.1761 16.5313 16.0736C16.5739 15.971 16.5958 15.8611 16.5958 15.75C16.5958 15.639 16.5739 15.529 16.5313 15.4264C16.4887 15.3239 16.4263 15.2307 16.3477 15.1524ZM3.09375 8.15626C3.09375 7.15499 3.39066 6.1762 3.94694 5.34368C4.50321 4.51116 5.29387 3.86228 6.21892 3.47911C7.14397 3.09594 8.16187 2.99569 9.1439 3.19103C10.1259 3.38637 11.028 3.86852 11.736 4.57653C12.444 5.28453 12.9261 6.18658 13.1215 7.16861C13.3168 8.15064 13.2166 9.16854 12.8334 10.0936C12.4502 11.0186 11.8014 11.8093 10.9688 12.3656C10.1363 12.9218 9.15752 13.2188 8.15625 13.2188C6.81417 13.2169 5.52758 12.6829 4.57858 11.7339C3.62958 10.7849 3.09561 9.49834 3.09375 8.15626Z" fill="black"/>
                </svg>
                </div>
                <input type="text" onChange={handleSearchChange} value={searchQuery} className="block w-[276px] p-4 ps-10 text-sm font-semibold text-[#6A6A6A] border rounded-lg" placeholder="Search "  />
                
            </div>
        </form>

    </div>
  )
}

export default TitleAndSearch