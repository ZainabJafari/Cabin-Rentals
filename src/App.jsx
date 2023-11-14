import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import CabinListing from './Pages/CabinListing'
import {CabinsContextProvider} from './Context/cabinContext'
import {DateProvider} from './Context/dateContext'
import Details from './Pages/Details'
import BookingConfirm from './Pages/BookingConfirm'
import PaymentConfirmation from './Pages/PaymentConfirmation'


const App = () => {
  return (
    <>
    <CabinsContextProvider>
    <DateProvider>
     <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cabinlist' element={<CabinListing />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/bookingInformation' element={<BookingConfirm />}/>
        <Route path='/paymentConfirmation' element={<PaymentConfirmation />}/>
      </Routes>
     </Router>
     </DateProvider>
     </CabinsContextProvider>
     {/* <Footer /> */}
    </>
  )
}

export default App