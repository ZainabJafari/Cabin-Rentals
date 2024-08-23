import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';

const defaultState = {
  startDate: new Date(),
  endDate: new Date(),
  updateStartDate: (startDate) => { },
  updateEndDate: (endDate) => { },
  getFormattedDate: (date) => { },
  saveDatesToBackend: () => {},
}

export const DateContext = createContext(defaultState);

export const useDateContext = () => {
  return useContext(DateContext);
};

export const DateProvider = ({ children }) => {

  // Define the default state for the context, including placeholder functions for updating dates and saving to the backend.
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date())
  const dateHasLoaded = useRef(false)

  // useEffect hook to load the start and end dates from localStorage when the component first mounts.
  useEffect(() => {
    const _startDate = localStorage.getItem('startDate')
    const _endDate = localStorage.getItem('endDate')

    if (_startDate) {
      setStartDate(new Date(_startDate))
    }
    if (_endDate) {
      setEndDate(new Date(_endDate))
    }
    // After a slight delay, mark that the dates have been loaded.
    setTimeout(() => {
      dateHasLoaded.current = true
    }, 300)

  }, [])

    // Function to update the date.
  const updateStartDate = (newStartDate) => {
    setStartDate(newStartDate);
  };

  const updateEndDate = (newEndDate) => {
    setEndDate(newEndDate);
  };

  // Function to format a given date to the format YYYY-MM-DD.
  const getFormattedDate = (date = new Date()) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
  }

    // Utility function to save a value to localStorage only after the date has been loaded.
  const setLocalStorageOf = (name, value) => {
    if (dateHasLoaded.current && value) {
      console.log("SETTING LOCAL STORAGE ", name, value)
      localStorage.setItem(name, value)
    }
  }

  // Function to save the current start and end dates to the backend using an HTTP POST request.
  const saveDatesToBackend = async () => {
    try {
      const response = await axios.post('http://localhost:7777/api/order', {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      });

      console.log('Svar från backend:', response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Save the start date to localStorage whenever it changes.
  useEffect(() => {
    setLocalStorageOf("startDate", startDate?.toISOString())
  }, [startDate]);

  useEffect(() => {
    setLocalStorageOf("endDate", endDate?.toISOString())
  }, [endDate]);

    return (
      <DateContext.Provider
        value={{
          startDate,
          endDate,
          updateStartDate,
          updateEndDate,
          getFormattedDate,
          saveDatesToBackend,
        }}
      >
        {children}
      </DateContext.Provider>
    );
  };

