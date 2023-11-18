import { parseISO } from 'date-fns';
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';

const defaultState = {
  startDate: new Date(),
  endDate: new Date(),
  updateStartDate: (startDate) => { },
  updateEndDate: (endDate) => { },
  getFormattedDate: (date) => { },
  // saveDatesToBackend: () => {},
}

export const DateContext = createContext(defaultState);

export const useDateContext = () => {
  return useContext(DateContext);
};

export const DateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date())

  const dateHasLoaded = useRef(false)

  useEffect(() => {
    const _startDate = localStorage.getItem('startDate')
    const _endDate = localStorage.getItem('endDate')

    if (_startDate) {
      console.log("GETTING START DATE", _startDate, new Date(_startDate))
      setStartDate(new Date(_startDate))
    }
    if (_endDate) {
      setEndDate(new Date(_endDate))
    }
    setTimeout(() => {
      dateHasLoaded.current = true
    }, 300)

  }, [])

  const updateStartDate = (newStartDate) => {
    setStartDate(newStartDate);
  };

  const updateEndDate = (newEndDate) => {
    setEndDate(newEndDate);
  };

  const getFormattedDate = (date = new Date()) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
  }

  const setLocalStorageOf = (name, value) => {
    if (dateHasLoaded.current && value) {
      console.log("SETTING LOCAL STORAGE ", name, value)
      localStorage.setItem(name, value)
    }
  }
  // const saveDatesToBackend = async () => {
  //   try {
  //     // Gör ett HTTP POST-anrop till backend för att spara datumen
  //     const response = await axios.post('http://localhost:7777/api/order', {
  //       startDate: startDate.toISOString(),
  //       endDate: endDate.toISOString(),
  //     });

  //     // Logga ut API-svaret eller utför andra åtgärder om det behövs
  //     console.log('Svar från backend:', response.data);
  //   } catch (error) {
  //     console.error('Fel vid spara datumen till backend:', error.message);
  //   }
  // };

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
          // saveDatesToBackend,
        }}
      >
        {children}
      </DateContext.Provider>
    );
  };