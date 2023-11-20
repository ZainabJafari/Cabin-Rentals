import React from 'react'
import Stars from '../Icons/Stars'
import customer1 from '../../assets/customer1.png'
import customer2 from '../../assets/customer2.png'
import customer3 from '../../assets/customer3.png'

const HomeReview = () => {
  return (
    <div>
        <div>
            <div>
              <div className='reviews'>
              </div>
                <p className='r-text'>Reviews</p>
            </div>
          <div className='user-review'>
            <div className='reviews-container'>
              <div className='re'>
               <div><img className='reviews-img' src={customer3} alt="customer-image" /></div>
                <div className='reviews-star'>
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                </div>
              </div>
                <p className='reviews-text'>Det var som att kliva in i en oas av lugn och natur. Utsikten var bedårande, och stugans mysiga atmosfär fick mig omedelbart att slappna av.</p>
            </div>
            <div className='reviews-container'>
              <div className='re'>
               <div><img className='reviews-img' src={customer1} alt="customer-image" /></div>
                <div className='reviews-star'>
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                </div>
              </div>
                <p className='reviews-text'>What a delightful cabin! From the comfortable interiors to the beautiful surroundings, every aspect of our stay was exceptional.</p>
            </div>
            <div className='reviews-container'>
              <div className='re'>
               <div><img className='reviews-img' src={customer2} alt="customer-image" /></div>
                <div className='reviews-star'>
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                </div>
              </div>
                <p className='reviews-text'>A hidden gem in the midst of nature! This cabin exceeded all expectations. Impeccable service, stunning views, and a tranquil environment..</p>
            </div>
            <div className='reviews-container'>
              <div className='re'>
               <div><img className='reviews-img' src={customer3} alt="customer-image" /></div>
                <div className='reviews-star'>
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                </div>
              </div>
                <p className='reviews-text'>Det var som att kliva in i en oas av lugn och natur. Utsikten var bedårande, och stugans mysiga atmosfär fick mig omedelbart att slappna av.</p>
            </div>
            <div className='reviews-container'>
              <div className='re'>
               <div><img className='reviews-img' src={customer1} alt="customer-image" /></div>
                <div className='reviews-star'>
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                </div>
              </div>
                <p className='reviews-text'>The service at this cabin was top-notch! Attentive and friendly staff, coupled with the well-maintained amenities, made our stay truly enjoyable. The memories created here will last a lifetime.</p>
            </div>
            <div className='reviews-container'>
              <div className='re'>
               <div><img className='reviews-img' src={customer1} alt="customer-image" /></div>
                <div className='reviews-star'>
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                </div>
              </div>
                <p className='reviews-text'>Det var som att kliva in i en oas av lugn och natur. Utsikten var bedårande, och stugans mysiga atmosfär fick mig omedelbart att slappna av.</p>
            </div>
          </div>

        </div>
        
    </div>
  )
}

export default HomeReview