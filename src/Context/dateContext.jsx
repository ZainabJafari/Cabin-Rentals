import React, { createContext, useContext, useState, useEffect } from 'react';

export const DateContext = createContext();

export const useDateContext = () => {
  return useContext(DateContext);
};

export const DateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(
    localStorage.getItem('startDate') || null
  );
  const [endDate, setEndDate] = useState(
    localStorage.getItem('endDate') || null
  );

  const updateStartDate = (newStartDate) => {
    setStartDate(newStartDate);
  };

  const updateEndDate = (newEndDate) => {
    setEndDate(newEndDate);
  };

  useEffect(() => {
    localStorage.setItem('startDate', startDate);
  }, [startDate]);

  useEffect(() => {
    localStorage.setItem('endDate', endDate);
  }, [endDate]);

  return (
    <DateContext.Provider
      value={{
        startDate,
        endDate,
        updateStartDate,
        updateEndDate,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
