import React, { useState } from 'react';

const HomeNavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="option">All</div>
          <div className="option">Budget</div>
          <div className="option">Standard</div>
          <div className="option">Deluxe</div>
        </div>
      )}
    </div>
  );
};

export default HomeNavDropdown;

