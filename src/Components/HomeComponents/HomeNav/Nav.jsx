import logo from '../../../assets/logo.png'
import HomeNavDropdown from './HomeNavDropdown'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDateContext } from '../../../Context/dateContext'
import { parseISO } from 'date-fns';
import {Link} from 'react-router-dom'


const Nav = () => {

  const { startDate, endDate, updateStartDate, updateEndDate, saveDatesToBackend } = useDateContext()
  const handleStartDateChange = (selectedStartDate) => {
    console.log('Selected Start Date:', selectedStartDate);
    try {
      if (selectedStartDate) {
        updateStartDate(selectedStartDate)
        // saveDatesToBackend()
      }
    } catch (error) {
      console.error('Error parsing Start Date:', error);
    }
  };
  
  const handleEndDateChange = (selectedEndDate) => {
    console.log('Selected End Date:', selectedEndDate);
    try {
      if (selectedEndDate) {
        const parsedEndDate = parseISO(selectedEndDate);
        updateEndDate(selectedEndDate);
        // saveDatesToBackend()
      }
    } catch (error) {
      console.error('Error parsing End Date:', error);
    }
  };
  
  
  return (
    <div className='card'>
      <div className='navlink'>
        <img src={logo} alt="logo" />
        <div className='navlink-link'>

          <Link to={'/cabinlist'}><li className='navbar-link-li'>Cabins</li></Link>
        <Link to={'/login'}>  <p><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C8.95161 0 0 8.88704 0 19.8557C0 30.8244 8.95161 39.7115 20 39.7115C31.0484 39.7115 40 30.8244 40 19.8557C40 8.88704 31.0484 0 20 0ZM20 7.68609C23.9194 7.68609 27.0968 10.8406 27.0968 14.7317C27.0968 18.6228 23.9194 21.7773 20 21.7773C16.0806 21.7773 12.9032 18.6228 12.9032 14.7317C12.9032 10.8406 16.0806 7.68609 20 7.68609ZM20 35.2279C15.2661 35.2279 11.0242 33.0982 8.18548 29.7676C9.70161 26.9333 12.6694 24.9798 16.129 24.9798C16.3226 24.9798 16.5161 25.0118 16.7016 25.0679C17.75 25.4041 18.8468 25.6203 20 25.6203C21.1532 25.6203 22.2581 25.4041 23.2984 25.0679C23.4839 25.0118 23.6774 24.9798 23.871 24.9798C27.3306 24.9798 30.2984 26.9333 31.8145 29.7676C28.9758 33.0982 24.7339 35.2279 20 35.2279Z" fill="#CBB26A" />
          </svg></p></Link>
        </div>

      </div>
      <h1 className='h1'>Explore our luxury & </h1> <h1 className='h1'>romantic cabins for couples</h1>

      <div className='hero'>

        <div className='hero-container'>
          <div className='dropdown'>
            <p className='hero-text'>Check in</p>
            <p className='date'>When?
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="When"
              />
            </p>
          </div>
          <div>
            <p className='last'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
              <path d="M3.5625 0L0 3.5625L9.5 13.0625L19 3.5625L15.4375 0L9.5 5.9375L3.5625 0Z" fill="#A0A0A0" />
            </svg></p>
          </div>
        </div>

        <div className='hero-container'>
          <div className='dropdown'>
            <p className='hero-text'>Check out</p>
            <p className='date'>When?
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                placeholderText="When"
              />

            </p>
          </div>
          <div>
            <p className='last'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
              <path d="M3.5625 0L0 3.5625L9.5 13.0625L19 3.5625L15.4375 0L9.5 5.9375L3.5625 0Z" fill="#A0A0A0" />
            </svg></p>
          </div>
        </div>
        <div className='hero-container'>
          <div className='dropdown'>
            <p className='hero-text'>Package</p>
            <p className='date'>All</p>
          </div>
          <div>
            <HomeNavDropdown />

          </div>
        </div>
        <div>
        <Link to={'/cabinlist'}><svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
            <path d="M16.0423 0.045835C7.1961 0.045835 0 7.24194 0 16.0881C0 24.9343 7.1961 32.1304 16.0423 32.1304C18.7465 32.1304 21.405 31.4887 23.6509 30.2511C23.8308 30.4676 24.0302 30.6671 24.2467 30.847L28.8302 35.4305C29.2535 35.9067 29.7696 36.2914 30.3469 36.561C30.9241 36.8305 31.5504 36.9792 32.1873 36.998C32.8241 37.0167 33.4581 36.9051 34.0502 36.67C34.6423 36.4349 35.1802 36.0812 35.6307 35.6307C36.0812 35.1802 36.4349 34.6423 36.67 34.0502C36.9051 33.458 37.0167 32.8241 36.998 32.1873C36.9792 31.5504 36.8305 30.9241 36.561 30.3469C36.2914 29.7696 35.9067 29.2535 35.4305 28.8302L30.847 24.2467C30.6237 24.0234 30.378 23.8237 30.1136 23.6509C31.3512 21.405 32.1304 18.7924 32.1304 16.0423C32.1304 7.1961 24.9343 0 16.0881 0L16.0423 0.045835ZM16.0423 4.62934C22.4133 4.62934 27.501 9.71703 27.501 16.0881C27.501 19.1132 26.401 21.9092 24.4759 23.9717C24.4301 24.0176 24.3842 24.0634 24.3384 24.1092C24.1219 24.2891 23.9225 24.4886 23.7426 24.7051C21.7258 26.5385 18.9757 27.5927 15.9964 27.5927C9.62536 27.5927 4.53767 22.505 4.53767 16.1339C4.53767 9.76286 9.62536 4.67517 15.9964 4.67517L16.0423 4.62934Z" fill="black" />
          </svg></Link>  
        </div>
      </div>
    </div>
  )
}

export default Nav