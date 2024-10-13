import React from 'react'
import { IoFilter } from "react-icons/io5";
import { TbFileExport } from "react-icons/tb";

interface Props {
  heading: string
}

const Heading: React.FC<Props> = ({heading}) => {
  return (
    <div className='py-6 flex justify-between items-center border-b'>
        <h1 className='text-2xl font-semibold'>{heading}</h1>

        <div className='flex space-x-2 text-sm'>
            <div className='flex items-center space-x-2 p-2 border rounded-lg'>
                <IoFilter />
                <p>Filter</p>
            </div>

            <div className='flex items-center space-x-2 p-2 border rounded-lg'>
                <TbFileExport />
                Export
            </div>
        </div>
    </div>
  )
}

export default Heading