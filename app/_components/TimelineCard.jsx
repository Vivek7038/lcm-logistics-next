import React from 'react'

const TimelineCard = ({item}) => {
  return (
    <div className='border-[2px] border-[#B1C2F3] flex flex-col sm:flex-row justify-between px-6 rounded-[12px] gap-x-2' >
       <div className='border-b-[1px] sm:border-b-0 sm:border-r-[1px] border-black py-7 my-2'>
              <h1 className='font-bold text-3xl md:text-5xl text-center sm:text-start'>{item.date}</h1>
       </div>
       <div className='flex flex-col items-center justify-between py-4 px-2'>
       <h1 className='text-md text-[#838383] text-wrap text-center'>Delivery made: {item.Delivery}</h1>
       <h1 className='text-md text-[#838383] text-wrap text-center'>revenue : {item.revenue}</h1>
       </div>
    </div>
  )
}

export default TimelineCard