import React from 'react'
import HomePackages from '../Components/HomeComponents/HomePackages'
import ImageSlider from '../Components/HomeComponents/ImageSlider'
import HomeReview from '../Components/HomeComponents/HomeReview'
import Nav from '../Components/Nav'
const Home = () => {
  return (
    <div>
        <Nav />
        <HomePackages />
        <ImageSlider />
        <HomeReview />
    </div>
  )
}

export default Home