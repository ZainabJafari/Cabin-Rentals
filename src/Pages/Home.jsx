import React from 'react'
import HomePackages from '../Components/HomeComponents/HomePackages'
import HomeSliderPart from '../Components/HomeComponents/HomeSliderPart'
import HomeReview from '../Components/HomeComponents/HomeReview'
import Nav from '../Components/HomeComponents/HomeNav/Nav'

const Home = () => {
  return (
    <div>
        <Nav />        
        <HomePackages />
        <HomeSliderPart />
        <HomeReview />
    </div>
  )
}

export default Home