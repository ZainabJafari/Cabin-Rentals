import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import CabinListing from './Pages/CabinListing'

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cabinlist' element={<CabinListing />}/>
      </Routes>
     </Router>
     {/* <Footer /> */}
    </>
  )
}

export default App