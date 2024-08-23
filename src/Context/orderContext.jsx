import React, { createContext, useContext, useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { useDateContext } from './dateContext';
import { useCabinContext } from './cabinContext';

const defaultState = {
  order: null,
  setOrder: () => {},
  createOrder: (cancellationProtection = false) => new Promise
}

export const OrderContext = createContext(defaultState);

export const useOrderContext = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
    const dateContext = useDateContext()
    const cabinContext = useCabinContext()
    const [order, setOrder] = useState(null)
    //TODO: orders
    //TODO: getOrders spara de i useState

    const createOrder = async (cancellationProtection = false) => {
        const token = localStorage.getItem("TOKEN")
        try {
            const response = await axios.post('http://localhost:7777/api/order', {
              checkinDate: dateContext.startDate.toISOString(),
              checkoutDate: dateContext.endDate.toISOString(),
              cabin: cabinContext.cabinDetail._id,
              cancellationProtection,

            }, {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              }
            });
            //TODO:
            //SPARA order
            //Navigera användare vidare
            //Hämta om våra orders
            console.log('Svar från backend:', response.data);
            setOrder(response.data)
            //TODO: getOrders or save created order to orders
            return response.data
          } catch (error) {
            console.error(error.message);
          }
    }
    return (
      <OrderContext.Provider
        value={{
          order,
          setOrder,
          createOrder
        }}
      >
        {children}
      </OrderContext.Provider>
    );
  };
