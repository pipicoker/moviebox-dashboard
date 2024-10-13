import React from 'react'
import AudienceSubTopics from './AudienceSubTopics'

const AgeRange = () => {
  return (
    <div className='p-6 border rounded-lg'>
        <AudienceSubTopics topic='Age Range'/>

        <div className='mt-8'>
          <div className=' flex  items-center justify-between text-xs font-semibold'>
                  
                  <label htmlFor="file">18-24</label>
                  <div className=' h-1 bg-[#F5F5F5] w-4/5'>
                    <div style={{width: `44.5%`}} className='h-1 bg-gradient-to-r from-[#35C3F3] to-[#8B9FE8] to-[#E681D8] to-[#FFA9A4] to-[#FED2CE] to-[#FED2CE] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" ">44.5%</span>
          </div>

          <div className='mt-8 flex  items-center justify-between text-xs font-semibold'>
                  
                  <label htmlFor="file">25-34</label>
                  <div className=' h-1 bg-[#F5F5F5] w-4/5'>
                    <div style={{width: `47.1%`}} className='h-1 bg-gradient-to-r from-[#35C3F3] to-[#8B9FE8] to-[#E681D8] to-[#FFA9A4] to-[#FED2CE] to-[#FED2CE] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" ">47.1%</span>
          </div>

          <div className='mt-8 flex  items-center justify-between text-xs font-semibold'>
                  
                  <label htmlFor="file">35-44</label>
                  <div className=' h-1 bg-[#F5F5F5] w-4/5'>
                    <div style={{width: `7.7%`}} className='h-1 bg-gradient-to-r from-[#35C3F3] to-[#8B9FE8] to-[#E681D8] to-[#FFA9A4] to-[#FED2CE] to-[#FED2CE] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" ">7.7%</span>
          </div>

          <div className='mt-8 flex  items-center justify-between text-xs font-semibold'>
                  
                  <label htmlFor="file">45-54</label>
                  <div className=' h-1 bg-[#F5F5F5] w-4/5'>
                    <div style={{width: `0.5%`}} className='h-1 bg-gradient-to-r from-[#35C3F3] to-[#8B9FE8] to-[#E681D8] to-[#FFA9A4] to-[#FED2CE] to-[#FED2CE] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" ">0.5%</span>
          </div>
        </div>
          

    </div>
  )
}

export default AgeRange