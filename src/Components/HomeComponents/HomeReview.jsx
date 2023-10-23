import React from 'react'
import Stars from '../Icons/Stars'
import customer1 from '../../assets/customer1.png'
import customer2 from '../../assets/customer2.png'
import customer3 from '../../assets/customer3.png'

const HomeReview = () => {
  return (
    <div>
        <h2 className='review-text'>Discover Memorable Retreat Experiences</h2>
        <div className='Img'>
                <img className='re-img' src={customer1} alt="customer-image" />
                <img className='re-img' src={customer3} alt="customer-image" />
                <img className='re-img' src={customer2} alt="customer-image" />

        </div>
        <div className='review'>

            <div className='review-estimonial'>
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
            <div className='review-estimonial'>
                <p className='review-name'>John</p>
                <div className='star'>
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                </div>
                <p className='text'> jag älskade att laga middagar i det fullt utrustade köket. Att utforska området och vandra genom de vackra skogarna gjorde verkligen upplevelsen oförglömlig.</p>
            </div>
            <div className='review-estimonial'>
                <p className='review-name'>Doe</p>
                <div className='star'>
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                </div>
                <p className='text'>Det var den perfekta pausen från vardagens stress och jag ser fram emot att hyra stuga igen i framtiden.</p>
            </div>


        </div>
    </div>
  )
}

export default HomeReview