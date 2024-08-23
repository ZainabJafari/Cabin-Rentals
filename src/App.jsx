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
import PaymentConfirmation from './Components/PaymentConfirmation/PaymentConfirmation'
import { OrderProvider } from './Context/orderContext'
import Login from './auth/Login'

const App = () => {
  return (
    <>
    <DateProvider>
    <CabinsContextProvider>
      <OrderProvider>
     <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cabinlist' element={<CabinListing />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/bookingInformation' element={<BookingConfirm />}/>
        <Route path='/paymentConfirmation' element={<PaymentConfirmation />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
     </Router>
     </OrderProvider>
     </CabinsContextProvider>
     </DateProvider>
     <Footer />
    </>
  )
}

export default App