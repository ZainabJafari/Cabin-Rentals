import {Link} from 'react-router-dom'
import { useOrderContext } from '../../Context/orderContext';
import { useState } from 'react';
import Navbar from '../Navbar';

const BookingWithLogin = () => {

  const { order } = useOrderContext()
  const [isChecked, setIsChecked] = useState(false);


    if (!order) {
    return <div>Loading...</div>;
  }  
  return (
    
    <div className='booking-information'>
        <Navbar/>
      <h3>Confirm Booking Information</h3>
      <div className='info'>
        <div className='baner'><p>Booking Information</p></div>
        <div className='booking-container'>
          <div className='booking-info'>
            <p className='general-text'>Check-in Date</p>
            <p>{order.checkinDate.split('T')[0]}</p>
            <p className='general-text'>Chosen Cabin</p>
            <p>{order.cabin.cabinName}</p>
            <p>Åre</p>
            <p className='general-text'>Cabin Package</p>
            <p>Exclusive breakfast, premium towels and sheets, champagne, bathtub, sauna, luxary beauty products.</p>
            <p className='general-text'>Cansellation Protection</p>
            <p>500 SEK</p><span className='checkbox'>
              <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            </span>

            <p className='general-text'>Total Cost</p>
            <p>{isChecked ? order.cabin.price + 500 : order.cabin.price}</p>
          </div>
          <div className='booking-info'>
            <p className='general-text'>Check-out Date</p>
            <p>{order.checkoutDate.split('T')[0]}</p>
            <p className='general-text'>Guests</p>
            <p>2 pers</p>
          </div>
        </div>
        <div>
        </div>
      
      </div>
     <Link to={'/paymentConfirmation'} className='btn-btn'><button className='btn-btn-confirm'>Confirm Booking</button></Link>
    </div>
  )
}

export default BookingWithLogin