import AudienceSubTopics from "./AudienceSubTopics"

const TopLocations = () => {
  return (
    <div className='p-6 border rounded-lg'>
        <AudienceSubTopics topic='Top Locations'/>

        <div className='mt-8'>
          <div className=' flex  items-center justify-between text-xs font-semibold'>
                  
                  <label htmlFor="file">United States</label>
                  <div className=' h-1 bg-[#F5F5F5] w-3/5'>
                    <div style={{width: `44.5%`}} className='h-1 bg-gradient-to-r from-[#35C3F3] to-[#8B9FE8] to-[#E681D8] to-[#FFA9A4] to-[#FED2CE] to-[#FED2CE] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" ">44.5%</span>
          </div>

          <div className='mt-8 flex  items-center justify-between text-xs font-semibold'>
                  
                  <label htmlFor="file">South Africa</label>
                  <div className=' h-1 bg-[#F5F5F5] w-3/5'>
                    <div style={{width: `47.1%`}} className='h-1 bg-gradient-to-r from-[#35C3F3] to-[#8B9FE8] to-[#E681D8] to-[#FFA9A4] to-[#FED2CE] to-[#FED2CE] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" ">47.1%</span>
          </div>

          <div className='mt-8 flex  items-center justify-between text-xs font-semibold'>
                  
                  <label htmlFor="file">India</label>
                  <div className=' h-1 bg-[#F5F5F5] w-3/5'>
                    <div style={{width: `7.7%`}} className='h-1 bg-gradient-to-r from-[#35C3F3] to-[#8B9FE8] to-[#E681D8] to-[#FFA9A4] to-[#FED2CE] to-[#FED2CE] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" ">7.7%</span>
          </div>

          <div className='mt-8 flex  items-center justify-between text-xs font-semibold'>
                  
                  <label htmlFor="file">London</label>
                  <div className=' h-1 bg-[#F5F5F5] w-3/5'>
                    <div style={{width: `0.5%`}} className='h-1 bg-gradient-to-r from-[#35C3F3] to-[#8B9FE8] to-[#E681D8] to-[#FFA9A4] to-[#FED2CE] to-[#FED2CE] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" ">0.5%</span>
          </div>
        </div>
          

    </div>
  )
}

export default TopLocations