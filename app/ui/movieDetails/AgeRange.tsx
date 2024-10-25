import React from 'react'
import AudienceSubTopics from './AudienceSubTopics'

const AgeRange = () => {
  return (
    <div className='p-6 border rounded-lg'>
        <AudienceSubTopics topic='Age Range'/>

        <div className='mt-8'>
          <div className=' grid grid-cols-10 space-x-2  items-center justify-between  text-xs font-semibold'>
                  
                  <span className='col-span-1'>18-24</span>
                  <div className=' h-1 bg-[#F5F5F5] col-span-8'>
                    <div style={{width: `44.5%`}} className='h-1 bg-[#6A6A6A]  rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" col-span-1">44.5%</span>
          </div>

          <div className='mt-10 grid grid-cols-10 space-x-2  items-center justify-between  text-xs font-semibold'>
                  
                  <span className='col-span-1'>25-34</span>
                  <div className=' h-1 bg-[#F5F5F5] col-span-8'>
                    <div style={{width: `47.1%`}} className='h-1 bg-gradient-to-r  from-[#FFA9A4]  via-[#8B9FE8]  to-[#35C3F3] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" col-span-1">47.1%</span>
          </div>

          <div className='mt-10 grid grid-cols-10 space-x-2  items-center justify-between text-xs font-semibold'>
                  
                  <span className='col-span-1'>35-44</span>
                  <div className=' h-1 bg-[#F5F5F5] col-span-8'>
                    <div style={{width: `7.7%`}} className='h-1 bg-[#6A6A6A] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className="col-span-1">7.7%</span>
          </div>

          <div className='mt-10 grid grid-cols-10 space-x-2  items-center justify-between  text-xs font-semibold'>
                  
                  <span className='col-span-1'>45-54</span>
                  <div className=' h-1 bg-[#F5F5F5] col-span-8'>
                    <div style={{width: `0.5%`}} className='h-1 bg-[#6A6A6A] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" col-span-1">0.5%</span>
          </div>
        </div>
          

    </div>
  )
}

export default AgeRange