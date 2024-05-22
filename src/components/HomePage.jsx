import React from 'react'
import PickYourMeditation from './PickYourMeditation'

const HomePage = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-4'>
      <h1 className="text-3xl font-normal md:text-4xl md:font-semibold py-4 text-primary text-center">
        Six Pack Mind
      </h1>

      <PickYourMeditation />
    </div>
  )
}

export default HomePage