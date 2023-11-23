import React, { useState, useEffect } from 'react';
import { useCabinContext } from '../../../Context/cabinContext'
import {Link} from 'react-router-dom'

const HomeNavDropdown = ({ onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getAllCabins, filteredCabins, setSelectedCategory } = useCabinContext()

  useEffect(() => {
    getAllCabins();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <svg
          className='last'
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="14"
          viewBox="0 0 19 14"
          fill="none"
        >
          <path
            d="M3.5625 0L0 3.5625L9.5 13.0625L19 3.5625L15.4375 0L9.5 5.9375L3.5625 0Z"
            fill="#A0A0A0"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="dropdown-options">
        <Link to={'/cabinlist'}><button className='dropdown-option-btn' onClick={() => setSelectedCategory('All')}>All</button></Link> 
        <Link to={'/cabinlist'}> <button  className='dropdown-option-btn' onClick={() => setSelectedCategory('Budget')}>Budget</button> </Link> 
         <Link to={'/cabinlist'}><button className='dropdown-option-btn' onClick={() => setSelectedCategory('Standard')}>Standard</button></Link> 
         <Link to={'/cabinlist'}><button className='dropdown-option-btn' onClick={() => setSelectedCategory('Deluxe')}>Deluxe</button></Link>
        </div>
      )}
    </div>
  );
};

export default HomeNavDropdown;

