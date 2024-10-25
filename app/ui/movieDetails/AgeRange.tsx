import React from 'react'
import AudienceSubTopics from './AudienceSubTopics'

const AgeRange = () => {
  return (
    <div className='p-6 border rounded-lg'>
        <AudienceSubTopics topic='Age Range'/>

        <div className='mt-8'>
          <div className=' flex  items-center justify-between  text-xs font-semibold'>
                  
                  <span className='w-1/12'>18-24</span>
                  <div className=' h-1 bg-[#F5F5F5] w-9/12'>
                    <div style={{width: `44.5%`}} className='h-1 bg-[#6A6A6A]  rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" w-1/12">44.5%</span>
          </div>

          <div className='mt-10 flex  items-center justify-between  text-xs font-semibold'>
                  
                  <span className='w-1/12'>25-34</span>
                  <div className=' h-1 bg-[#F5F5F5] w-9/12'>
                    <div style={{width: `47.1%`}} className='h-1 bg-gradient-to-r  from-[#FFA9A4]  via-[#8B9FE8]  to-[#35C3F3] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" w-1/12">47.1%</span>
          </div>

          <div className='mt-10 flex  items-center justify-between text-xs font-semibold'>
                  
                  <span className='w-1/12'>35-44</span>
                  <div className=' h-1 bg-[#F5F5F5] w-9/12'>
                    <div style={{width: `7.7%`}} className='h-1 bg-[#6A6A6A] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" w-1/12">7.7%</span>
          </div>

          <div className='mt-10 flex  items-center justify-between  text-xs font-semibold'>
                  
                  <span className='w-1/12'>45-54</span>
                  <div className=' h-1 bg-[#F5F5F5] w-9/12'>
                    <div style={{width: `0.5%`}} className='h-1 bg-[#6A6A6A] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" w-1/12">0.5%</span>
          </div>
        </div>
          

    </div>
  )
}

export default AgeRange