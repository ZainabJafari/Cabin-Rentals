import {useContext, useEffect} from 'react'
import { DateContext } from '../../Context/dateContext'
import { CabinsContext } from '../../Context/cabinContext'
import UserRegister from './UserRegister';



const BookningInformation = () => {

    const { startDate, endDate } = useContext(DateContext);
    const { getCabinDetail } = useContext(CabinsContext);



    // if (!getCabinDetail) {
    //     return <div>Loading ...</div>;
    // }

  return (
    <div className='booking-information'>
        <h3>Confirm Booking Information</h3>
        <div className='info'>
        <div className='baner'><p>Booking Information</p></div>
        <div className='booking-container'>
        <div className='booking-info'>
            <p className='general-text'>Check-in Date</p>
            <p>{startDate}</p>
            <p className='general-text'>Chosen Cabin</p>
            <p>className</p>
            <p>Åre</p>
            <p className='general-text'>Cabin Package</p>
            <p>deluxe</p>
            <p>Exclusive breakfast, premium towels and sheets, champagne, bathtub, sauna, luxary beauty products. <span></span></p>
            <p className='general-text'>Cansellation Protection</p>
            <p>3000 SEK</p>
            <p className='general-text'>Total Cost</p>
            <p>1222222</p>
        </div>
        <div className='booking-info'>
            <p className='general-text'>Check-out Date</p>
            <p>3 date</p>
            <p className='general-text'>Guests</p>
            <p>2 pers</p>
        </div>
        </div>
        <div>
        <UserRegister/>
        </div>
        </div>
    </div>
  )
}

export default BookningInformation