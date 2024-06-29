import React from 'react'
import circle from '../assets/Circles.svg'
import work from '../assets/WORK360.svg'

const Background = () => {
  return (
    <div className='flex'>
       <div className='absolute flex flex-col gap-8 top-1/2 left-32 items-center'>
        <img src={work} alt='work360' />
        <p className='w-2/3 content-center'>Now your companies & employees are in one place  and always under the control</p>
       </div>
       <div className='h-screen bg-slate-300 w-full flex justify-end  items-end'>
        <img src={circle} alt='circle' className='h-screen' />
       </div>
       <div className='bg-blue-400 absolute flexCenter w-1/2 lg:lg:right-20 lg:top-1/2'>Here your log in UI </div>
    </div>
  )
}

export default Background