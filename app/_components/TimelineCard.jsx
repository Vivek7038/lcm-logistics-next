import React from 'react'

const TimelineCard = () => {
  return (
    <div className='border-[2px] border-[#B1C2F3] flex flex-row justify-between px-6 rounded-[12px] gap-x-2 ' >
       <div className='border-r-[1px] border-black py-7 my-2'>
              <h1 className='font-bold text-3xl md:text-5xl'>2021</h1>
       </div>
       <div className='flex flex-col items-center justify-between py-4'>
       <h1 className='text-md text-[#838383] text-wrap text-center'>Delivery made: 1,45,666</h1>
       <h1 className='text-md text-[#838383] text-wrap text-center'>revenue :10,07,950</h1>
       </div>
    </div>
  )
}

export default TimelineCard