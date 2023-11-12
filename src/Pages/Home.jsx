import React from 'react'
import HomePackages from '../Components/HomeComponents/HomePackages'
import HomeSliderPart from '../Components/HomeComponents/HomeSliderPart'
import HomeReview from '../Components/HomeComponents/HomeReview'
import Nav from '../Components/HomeComponents/HomeNav/Nav'
import { DateProvider } from '../Context/dateContext'

const Home = () => {
  return (
    <div>
        <DateProvider>
        <Nav />        
        <HomePackages />
        <HomeSliderPart />
        <HomeReview />
        </DateProvider>


    </div>
  )
}

export default Home