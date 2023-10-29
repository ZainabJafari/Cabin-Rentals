import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import CabinListing from './Pages/CabinListing'
import {CabinsContextProvider} from './Context/cabinContext'
import Details from './Pages/Details'


const App = () => {
  return (
    <>
    <CabinsContextProvider>
     <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cabinlist' element={<CabinListing />}/>
        <Route path='/details/:id' element={<Details />}/>
      </Routes>
     </Router>
     </CabinsContextProvider>
     {/* <Footer /> */}
    </>
  )
}

export default App