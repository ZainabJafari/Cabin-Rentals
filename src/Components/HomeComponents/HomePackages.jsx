import React from 'react'
import hero1 from '../../assets/hero1.jpeg'
import hero2 from '../../assets/hero2.jpeg'
import hero3 from '../../assets/hero3.jpeg'
import HomeIconPackages from './HomeIconPackages'

const HomePackages = () => {
  return (
    <div className='home-container'>
      <h1 className='packages-h1'>Tailored Retreats for Every Budget</h1>
      <div className='container'>
        <div className='package-card'>
            <img className='packageImage' src={hero1} alt="Cabin Budget" />
            <p className='text'>BUDGET</p>
            <p className='package-text'>Experience a memorable getaway without breaking the bank with our budget-friendly cabin rental package. Unwind in the midst of nature, surrounded by the peaceful ambiance of the outdoors, making it an ideal escape for the budget-conscious traveler.</p>
              <HomeIconPackages />
        </div>
        <div className='package-card'>
            <img className='packageImage'  src={hero2} alt="Cabin standard" />
            <p className='text'>STANDARD</p>
            <p className='package-text'>Indulge in a comfortable and well-rounded cabin rental experience with our standard package. This package is designed to offer a blend of convenience, amenities, and activities, ensuring a delightful stay for all types of travelers. A delightful stay </p>
              <HomeIconPackages />
        </div>
        <div className='package-card'>
            <img className='packageImage'  src={hero3} alt="Cabin deluxe" />
            <p className='text'>DELUXE</p>
            <p className='package-text'>Escape to the lap of luxury in our deluxe cabin rental package. Experience the perfect blend of rustic charm and modern comfort amidst the breathtaking natural surroundings. This package is curated for those seeking an exceptional retreat filled with relaxation and adventure.</p>
              <HomeIconPackages />
        </div>
      </div>

      <div className='Rectangle'>
        <div className='Info-Card'>
        <p className='info-text'>About Our Cabins</p>
        <p className='info-text2'>Welcome to our cozy cabin rentals, nestled in the heart of nature. Our cabins offer a perfect blend of comfort and rustic charm, providing you with a memorable retreat experience.</p>
        </div>
        <div className='Info-Card'>
        <p className='info-text'>Activities and Features</p>
        <p className='info-text2'>Explore a wide range of outdoor activities during your stay. Our cabins are also equipped with cozy fireplaces, fully stocked kitchen and comfortable living spaces for a delightful stay.</p>
        </div>
        <div className='Info-Card'>
        <p className='info-text'>Booking and Reservations</p>
        <p className='info-text2'>Booking with us is easy and convenient. Simply select your desired dates and cabin, and we'll take care of the rest. We offer flexible options to suit your preferences and ensure a seamless reservation process.</p>
        </div>
        <div className='Info-Card'>
        <p className='info-text'>Booking and Reservations</p>
        <p className='info-text2'>Booking with us is easy and convenient. Simply select your desired dates and cabin, and we'll take care of the rest. We offer flexible options to suit your preferences and ensure a seamless reservation process.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePackages