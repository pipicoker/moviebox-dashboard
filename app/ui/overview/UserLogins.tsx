import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import Donut from './Donut';

const UserLogins = () => {
  return (
    <div className=' h-[364px] relative  border rounded-lg'>
        <div className='p-6'>
            <div className='flex justify-between items-center font-medium'>
                <h2>Today&apos;s user logins</h2>
                <HiOutlineDotsVertical />

            </div>

            <div className='pt-8'>
              <Donut />
            </div>

            
        </div>

        <div className='absolute bottom-0 w-full h-[72px] bg-[#E0E0E0] h-[72px] px-[10px] flex items-center justify-end rounded-b-lg'>
                <button className='px-4 py-2 bg-[#FFFFFF] border rounded-xl text-sm font-medium'>
                  View full report
                </button>
        </div>
    </div>
  )
}

export default UserLogins