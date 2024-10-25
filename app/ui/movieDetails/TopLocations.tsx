import AudienceSubTopics from "./AudienceSubTopics"

const TopLocations = () => {
  return (
    <div className='p-6 border rounded-lg'>
        <AudienceSubTopics topic='Top Locations'/>

        <div className='mt-8'>
          <div className=' grid grid-cols-9  items-center justify-between space-x-3 text-xs font-semibold'>
                  
                  <label htmlFor="file" className="col-span-2">United States</label>
                  <div className=' h-1 bg-[#F5F5F5] col-span-6'>
                    <div style={{width: `44.5%`}} className='h-1 bg-[#6A6A6A] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className="col-span-1">44.5%</span>
          </div>

          <div className='mt-10 grid grid-cols-9  items-center justify-between space-x-3 text-xs font-semibold'>
                  
                  <label htmlFor="file" className="col-span-2">South Africa</label>
                  <div className=' h-1 bg-[#F5F5F5] col-span-6'>
                    <div style={{width: `47.1%`}} className='h-1 bg-gradient-to-r  from-[#FFA9A4]  via-[#8B9FE8]  to-[#35C3F3]  rounded-[40px]'  >
                    </div>
                  </div>
                  <span className=" col-span-1">47.1%</span>
          </div>

          <div className='mt-10 grid grid-cols-9  items-center justify-between space-x-3 text-xs font-semibold'>
                  
                  <label htmlFor="file" className="col-span-2">India</label>
                  <div className=' h-1 bg-[#F5F5F5] col-span-6'>
                    <div style={{width: `7.7%`}} className='h-1 bg-[#6A6A6A] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className="col-span-1">7.7%</span>
          </div>

          <div className='mt-10 grid grid-cols-9  items-center justify-between space-x-3 text-xs font-semibold'>
                  
                  <label htmlFor="file" className="col-span-2">London</label>
                  <div className=' h-1 bg-[#F5F5F5] col-span-6'>
                    <div style={{width: `0.5%`}} className='h-1 bg-[#6A6A6A] rounded-[40px]'  >
                    </div>
                  </div>
                  <span className="col-span-1 ">0.5%</span>
          </div>
        </div>
          

    </div>
  )
}

export default TopLocations