import React from 'react'
import BookningInformation from '../Components/BookingComponents/BookningInformation'
import { CabinsContextProvider } from '../Context/cabinContext'
import {DateProvider} from '../Context/dateContext'
import Navbar from '../Components/Navbar'
const BookingConfirm = () => {
  return (
    <div>
        <Navbar/>
        <BookningInformation />
    </div>
  )
}

export default BookingConfirm