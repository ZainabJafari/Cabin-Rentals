import {useEffect} from 'react';
import Wifi from '../Icons/Wifi';
import Deck from '../Icons/Deck';
import Washingmachine from '../Icons/WashingMachin';
import Parking from '../Icons/Parking';
import Lounge from '../Icons/Lounge';
import Bed from '../Icons/Bed';
import Charging from '../Icons/Charging';
import Kitchen from '../Icons/Kitchen';
import Pet from '../Icons/Pet';
import TV from '../Icons/TV';
import Towels from '../Icons/Towels';
import { useDateContext } from '../../Context/dateContext';
import { CabinsContext } from '../../Context/cabinContext';
import { Link } from 'react-router-dom';
import Reviews from '../../Components/DetailComponents/Reviews'


import { useContext } from 'react';

const IconsDetail = () => {
    const { startDate, endDate, getFormattedDate, updateStartDate } = useDateContext()
    const { cabinDetail } = useContext(CabinsContext);

    // useEffect(() => {
    //     updateStartDate(startDate)
    //     console.log('startDate has changed:', startDate);
    //     console.log('endDate has changed:', endDate);
    // }, [startDate, endDate]);

    if (!cabinDetail) {
        return <div>Loading...</div>; 
    }


    return (
        <div className='allt'>
            <p className='detail-facilities-text'>Facilities</p>
            <div className='detail-part-two'>
                <div className='part-one'>
                    <div className='icon-list'>
                        <div className='row-one'>
                            <div key={cabinDetail._id} className='common-icon'>
                                <div><Charging /></div>
                                <p>Charging station for electric vehicles</p>
                            </div>
                            <div className='common-icon'>
                                <div><Wifi /></div>
                                <p>comfortable bedding</p>
                            </div>
                            <div className='common-icon'>
                                <div><Kitchen /></div>
                                <p>Kitchen</p>
                            </div>
                        </div>
                        <div className='row-two'>
                            <div className='common-icon'>
                                <div><Pet /></div>
                                <p>Pet</p>
                            </div>
                            <div className='common-icon'>
                                <div><TV /></div>
                                <p>TV</p>
                            </div>
                            <div className='common-icon'>
                                <div><Wifi /></div>
                                <p>Free Wifi</p>
                            </div>
                        </div>
                    </div>
             

                 {cabinDetail.property.map((description, index) => (
                    <div className='row-one-list' key={index}>
                        <div className='description-container' key={description.Washingmachine}>
                            {description.Washingmachine && (
                                <div className='description-text'>
                                    <div className='description-icon'>
                                        <Washingmachine />
                                    </div>
                                    {description.Washingmachine}
                                </div>
                            )}
                        </div>
                        <div className='description-container' key={description.Privateparking}>
                            {description.Privateparking && (
                                <div className='description-text'>
                                    <div className='description-icon'>
                                        <Parking />
                                    </div>
                                    {description.Privateparking}
                                </div>
                            )}
                        </div>
                        <div className='description-container' key={description.Kingsizebed}>
                            {description.Kingsizebed && (
                                <div className='description-text'>
                                    <div className='description-icon'>
                                        <Bed />
                                    </div>
                                    {description.Kingsizebed}
                                </div>
                            )}
                        </div>
                        <div className='description-container' key={description.Privatedeck}>
                            {description.Privatedeck && (
                                <div className='description-text'>
                                    <div className='description-icon'>
                                        <Deck />
                                    </div>
                                    {description.Privatedeck}
                                </div>
                            )}
                        </div>
                        <div className='description-container' key={description.Towels}>
                            {description.Towels && (
                                <div className='description-text'>
                                    <div className='description-icon'>
                                        <Towels />
                                    </div>
                                    {description.Towels}
                                </div>
                            )}
                        </div>
                        <div className='description-container' key={description.Lounge}>
                            {description.Lounge && (
                                <div className='description-text'>
                                    <div className='description-icon'>
                                        <Lounge />
                                    </div>
                                    {description.Lounge}
                                </div>
                            )}
                        </div>
                    </div>
                 ))}
                </div>

                <div className='rectangle-reserv'>
                   <div className='reserv-text'>
                    <div>
                        <p>1 bedroom </p>
                        <p>check in {getFormattedDate(startDate)}</p>
                    </div>
                    <div>
                        <p className='persons'>2x
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                                <path d='M7.68099 8.35365C9.80286 8.35365 11.5215 6.59596 11.5215 4.42585C11.5215 2.25574 9.80286 0.498047 7.68099 0.498047C5.55912 0.498047 3.84049 2.25574 3.84049 4.42585C3.84049 6.59596 5.55912 8.35365 7.68099 8.35365ZM7.68099 10.3176C5.11746 10.3176 0 11.6334 0 14.2454V16.2093H15.362V14.2454C15.362 11.6334 10.2445 10.3176 7.68099 10.3176Z' fill='#111111' />
                            </svg></p>
                        <p>check out {getFormattedDate(endDate)}</p>
                    </div>
                    </div>
                <div className='reserv-price'>
                    <p className='total-price'>Total</p>
                    <p>{cabinDetail.price} SEK</p>
                </div>
                <div>
                    <Link  to={'/bookingInformation'} className='btn-btn'><button>Reserve</button></Link>
            </div>
            </div>
            </div>
            
              <div>  
                <div className='icluded-container'>
                <p className='included-text'>Included in the package</p>
                    {cabinDetail.included.map((includ, index) => (
                        <li key={index} className='included'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <circle cx="5.5" cy="5.5" r="5.5" fill="#396A3C" />
                            </svg>
                            {includ.Included}
                        </li>
                    ))}
                </div>
                </div>
            <div className='reviews-list'>
            <Reviews/>
            </div>
        </div>
    );
};

export default IconsDetail;
