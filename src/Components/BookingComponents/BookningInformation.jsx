import { useEffect, useState } from 'react'
import { useDateContext } from '../../Context/dateContext'
// import { CabinsContext } from '../../Context/cabinContext'
import UserRegister from './UserRegister';
import { useCabinContext } from '../../Context/cabinContext';
import axios from 'axios'
import {Link} from 'react-router-dom'

const BookningInformation = () => {

  const { startDate, endDate, getFormattedDate } = useDateContext()
  const { cabinDetail } = useCabinContext()

  const [isChecked, setIsChecked] = useState(false);

  const [userOrder, setUserOrder] = useState([])

  
  const getAllCabins = async () => {
    try {
      const result = await axios.get('http://localhost:7777/api/order/myOrder');
      setUserOrder(result.data);
      console.log('Users order:', result);
    } catch (error) {
      console.error('Somthing went wrong:', error.message);
    }
  };
  
  useEffect(() => {
    getAllCabins();
  }, []);
  
     const cabinName = userOrder.map((order) => order.cabin.cabinName);
     const checkInDate = userOrder.map((order) => order.checkinDate);
     const checkOutDate = userOrder.map((order) => order.checkoutDate);
     const Cansellation = userOrder.map((order) => order.cancellationProtection);

  return (
    <div className='booking-information'>
      <h3>Confirm Booking Information</h3>
      <div className='info'>
        <div className='baner'><p>Booking Information</p></div>
        <div className='booking-container'>
          <div className='booking-info'>
            <p className='general-text'>Check-in Date</p>
            {/* <p>{userOrder.checkInDate}</p> */}
            <p>{getFormattedDate(startDate)}</p>
            <p className='general-text'>Chosen Cabin</p>
            <p>{cabinDetail.cabinName}</p>

            {/* <p>{cabinName}</p> */}
            <p>Åre</p>
            <p className='general-text'>Cabin Package</p>
            <p>Exclusive breakfast, premium towels and sheets, champagne, bathtub, sauna, luxary beauty products.</p>
            <p className='general-text'>Cansellation Protection</p>
            <p>500 SEK</p><span className='checkbox'>
              <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            </span>

            <p className='general-text'>Total Cost</p>
            <p>{isChecked ? cabinDetail.price + 500 : cabinDetail.price}</p>
          </div>
          <div className='booking-info'>
            <p className='general-text'>Check-out Date</p>
            <p>{getFormattedDate(endDate)}</p>
            <p>{checkOutDate}</p>
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

export default BookningInformation