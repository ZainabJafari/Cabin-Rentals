import React from 'react'
import ImageDetailCabin from '../Components/DetailComponents/ImageDetailCabin'
// import IconDetail from '../Components/DetailComponents/IconsDetail'
// import { DateProvider } from '../Context/dateContext';
import {CabinsContextProvider} from '../Context/cabinContext'
import {DateProvider} from '../Context/dateContext'
import Reviews from '../Components/DetailComponents/Reviews'
const Details = () => {
  return (
    <div>
    <CabinsContextProvider>
      <DateProvider>

        <ImageDetailCabin />
        {/* <Reviews /> */}
        </DateProvider>

        </CabinsContextProvider>
    </div>
  )
}

export default Details