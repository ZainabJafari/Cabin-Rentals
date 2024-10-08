import HomeNavDropdown from './HomeNavDropdown';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDateContext } from '../../../Context/dateContext';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';

const Nav = () => {
  const { startDate, endDate, updateStartDate, updateEndDate } = useDateContext();

  const handleStartDateChange = (selectedStartDate) => {
    if (selectedStartDate) updateStartDate(selectedStartDate);
  };

  const handleEndDateChange = (selectedEndDate) => {
    if (selectedEndDate) updateEndDate(selectedEndDate);
  };

  return (
    <div>
      <Navbar />
      <div className="card"> 
      <h1 className="nav-text">Find Your Perfect Getaway – A Wide Selection of Vacation Rentals</h1>
      <div className="container">
        <div className="hero">
          <div className="dropdown">
            <p>Check in</p>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="When?"
              className="date-picker"
            />
          </div>

          <div className="dropdown">
            <p>Check out</p>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText="When?"
              className="date-picker"
            />
          </div>

          <div className="dropdown">
            <p>Package</p>
            <p>All</p>
          </div>

          <HomeNavDropdown />
          <Link to="/cabinlist">
            <svg
              className="home-nav-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
            >
              <path
                d="M16.0423 0.045835C7.1961 0.045835 0 7.24194 0 16.0881C0 24.9343 7.1961 32.1304 16.0423 32.1304C18.7465 32.1304 21.405 31.4887 23.6509 30.2511C23.8308 30.4676 24.0302 30.6671 24.2467 30.847L28.8302 35.4305C29.2535 35.9067 29.7696 36.2914 30.3469 36.561C30.9241 36.8305 31.5504 36.9792 32.1873 36.998C32.8241 37.0167 33.4581 36.9051 34.0502 36.67C34.6423 36.4349 35.1802 36.0812 35.6307 35.6307C36.0812 35.1802 36.4349 34.6423 36.67 34.0502C36.9051 33.458 37.0167 32.8241 36.998 32.1873C36.9792 31.5504 36.8305 30.9241 36.561 30.3469C36.2914 29.7696 35.9067 29.2535 35.4305 28.8302L30.847 24.2467C30.6237 24.0234 30.378 23.8237 30.1136 23.6509C31.3512 21.405 32.1304 18.7924 32.1304 16.0423C32.1304 7.1961 24.9343 0 16.0881 0L16.0423 0.045835ZM16.0423 4.62934C22.4133 4.62934 27.501 9.71703 27.501 16.0881C27.501 19.1132 26.401 21.9092 24.4759 23.9717C24.4301 24.0176 24.3842 24.0634 24.3384 24.1092C24.1219 24.2891 23.9225 24.4886 23.7426 24.7051C21.7258 26.5385 18.9757 27.5927 15.9964 27.5927C9.62536 27.5927 4.53767 22.505 4.53767 16.1339C4.53767 9.76286 9.62536 4.67517 15.9964 4.67517L16.0423 4.62934Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Nav;
