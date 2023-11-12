import React from 'react'
import BookningInformation from '../Components/BookingComponents/BookningInformation'
// import UserRegister from '../Components/BookingComponents/UserRegister'
import { CabinsContextProvider } from '../Context/cabinContext'
import Navbar from '../Components/Navbar'
const BookingConfirm = () => {
  return (
    <div>
      <CabinsContextProvider>
        <Navbar/>
        <BookningInformation />
        {/* <UserRegister /> */}
      </CabinsContextProvider>

    </div>
  )
}

export default BookingConfirm