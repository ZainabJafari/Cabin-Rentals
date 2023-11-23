import {useContext, useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer/Footer'
import { CabinsContext } from '../Context/cabinContext'
import { v4 as uuidv4 } from 'uuid';
import {useCabinContext} from '../Context/cabinContext'


const PaymentConfirmation = () => {

    const randomId = Math.random().toString(36)

    const { cabinDetail } = useCabinContext()

    return (
        <div>
            <Navbar/>
            <div className='payment-confirmation'>
                <div className='baner'><svg xmlns="http://www.w3.org/2000/svg" width="55" height="57" viewBox="0 0 55 57" fill="none">
                    <path d="M35.1913 56.0479H20.0013C6.25432 56.0479 0.380859 49.9999 0.380859 35.8446V20.2033C0.380859 6.04796 6.25432 0 20.0013 0H35.1913C48.9382 0 54.8117 6.04796 54.8117 20.2033V35.8446C54.8117 49.9999 48.9382 56.0479 35.1913 56.0479ZM20.0013 3.91032C8.33029 3.91032 4.17836 8.1856 4.17836 20.2033V35.8446C4.17836 47.8623 8.33029 52.1376 20.0013 52.1376H35.1913C46.8622 52.1376 51.0142 47.8623 51.0142 35.8446V20.2033C51.0142 8.1856 46.8622 3.91032 35.1913 3.91032H20.0013Z" fill="#CBB26A" />
                    <path d="M24 37.3567C23.4937 37.3567 23.0127 37.1481 22.6582 36.7832L15.4935 29.4057C14.7593 28.6497 14.7593 27.3984 15.4935 26.6424C16.2277 25.8864 17.4429 25.8864 18.1771 26.6424L24 32.6382L37.0128 19.2389C37.747 18.4829 38.9622 18.4829 39.6964 19.2389C40.4305 19.9949 40.4305 21.2462 39.6964 22.0022L25.3418 36.7832C24.9874 37.1481 24.5064 37.3567 24 37.3567Z" fill="#CBB26A" />
                </svg></div>
                <h3 className='general-text'>Thank you for your payment! </h3>
                <p>Total payment amount: </p>
                <p className='general-text'>{cabinDetail.price} SEK</p>
                {/* <p>{userOrder.price}</p> */}

                <p>Your booking reference:</p>
                <p className='general-text'>{randomId}</p>
                <p>A Receipt for this transaction has been sent to this email:</p>
                <p className='general-text'>sara@gmail.com</p>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default PaymentConfirmation