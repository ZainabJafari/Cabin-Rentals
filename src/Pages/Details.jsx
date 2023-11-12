import React from 'react'
import ImageDetailCabin from '../Components/DetailComponents/ImageDetailCabin'
// import IconDetail from '../Components/DetailComponents/IconsDetail'
// import { DateProvider } from '../Context/dateContext';
import {CabinsContextProvider} from '../Context/cabinContext'
import {DateProvider} from '../Context/dateContext'

const Details = () => {
  return (
    <div>
    <CabinsContextProvider>
      <DateProvider>

        <ImageDetailCabin />
        </DateProvider>
        </CabinsContextProvider>
    </div>
  )
}

export default Details