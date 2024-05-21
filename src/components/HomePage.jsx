import React from 'react'
import PickYourMeditation from './PickYourMeditation'

const HomePage = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-4'>
      <h1 className="text-4xl font-bold py-4">
        Six Pack Mind
      </h1>

      <PickYourMeditation />
    </div>
  )
}

export default HomePage