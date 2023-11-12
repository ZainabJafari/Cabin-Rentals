import React from 'react'
import Stars from '../Icons/Stars'
import customer1 from '../../assets/customer1.png'
import customer2 from '../../assets/customer2.png'
import customer3 from '../../assets/customer3.png'

const HomeReview = () => {
  return (
    <div>
        <div className='review'>
            <div className='review-estimonial'>
            <img className='re-img' src={customer1} alt="customer-image" />
                <p className='review-name'>Jane</p>
                <div className='star'>
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                </div>
                <p className='text'>Det var som att kliva in i en oas av lugn och natur. Utsikten var bedårande, och stugans mysiga atmosfär fick mig omedelbart att slappna av.</p>
            </div>
        </div>
        
    </div>
  )
}

export default HomeReview