import { useEffect, useState } from 'react'
import { useDateContext } from '../../Context/dateContext'
// import { CabinsContext } from '../../Context/cabinContext'
import UserRegister from './UserRegister';
import { useCabinContext } from '../../Context/cabinContext';



const BookningInformation = () => {

  const { startDate, endDate, getFormattedDate } = useDateContext()
  const { cabinDetail } = useCabinContext()

  console.log("CABIN detail", cabinDetail)

    const [isChecked, setIsChecked] = useState(false);
  


  //   const getAllCabins = async () => {
  //     const result = await axios.get('http://localhost:7777/api/order/myOrder')
  //     setCabins(result.data)
  // }
  // useEffect(() => {
  //   getAllCabins();
  // }, []);
  // const { getCabinDetail, getCabinById} = useContext(CabinsContext);


  // if (!getCabinDetail) {
  //     return <div>Loading ...</div>;
  // }
  // const { id } = useParams();


  //   useEffect(() => {
  //     getCabinById();
  // });



  return (
    <div className='booking-information'>
      <h3>Confirm Booking Information</h3>
      <div className='info'>
        <div className='baner'><p>Booking Information</p></div>
        <div className='booking-container'>
          <div className='booking-info'>
            <p className='general-text'>Check-in Date</p>
            <p>{getFormattedDate(startDate)}</p>
            <p className='general-text'>Chosen Cabin</p>
            <p>{cabinDetail.cabinName}</p>
            <p>Åre</p>
            <p className='general-text'>Cabin Package</p>
            <p>Exclusive breakfast, premium towels and sheets, champagne, bathtub, sauna, luxary beauty products. <span></span></p>
            <p className='general-text'>Cansellation Protection</p>
            <p>3000 SEK</p><span className='checkbox'>
              <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            </span>

            <p className='general-text'>Total Cost</p>
            <p>{isChecked ? cabinDetail.price + 500 : cabinDetail.price}</p>
          </div>
          <div className='booking-info'>
            <p className='general-text'>Check-out Date</p>
            <p>{getFormattedDate(endDate)}</p>
            <p className='general-text'>Guests</p>
            <p>2 pers</p>
          </div>
        </div>
        <div>
          <UserRegister />
        </div>
      </div>
    </div>
  )
}

export default BookningInformation