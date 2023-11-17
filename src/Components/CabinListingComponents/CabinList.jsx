// import React, { useContext , useEffect, useState} from 'react'
// import Stars from '../../Components/Icons/Stars'
// import Like from '../../Components/Icons/Like'
// import {CabinsContext} from '../../Context/cabinContext'
// import {Link} from 'react-router-dom'
// import HomeNavDropdown from '../HomeComponents/HomeNav/HomeNavDropdown';

// const CabinList = () => {

//     const {getAllCabins, getData } = useContext(CabinsContext)
//     const [selectedCategory, setSelectedCategory] = useState('All');
//   const [filteredCabins, setFilteredCabins] = useState([]);

//     useEffect(() => {
//         getAllCabins()
//     }, [])

//     useEffect(() => {
//         // Filtrera stugor baserat på vald kategori
//         if (selectedCategory === 'All') {
//           setFilteredCabins(getData);
//         } else {
//           setFilteredCabins(getData.filter((cabin) => cabin.category === selectedCategory));
//         }
//       }, [selectedCategory, getData]);
    
//     //   const handleCategorySelect = (category) => {
//     //     setSelectedCategory(category);
//     //   };


//     return (
//         <div className='cabin-list'>
//              {/* <HomeNavDropdown onSelectCategory={setSelectedCategory} /> */}
//             {filteredCabins.map((cabin) => (
//                 <div key={cabin._id}>
//                 <div className='list'>         
//                     <div className='card-one'>
//                         <img className='cabin-img' src={cabin.imageURL} alt="cabin" />
//                         <p className='cabin-category'>{cabin.category}</p>
//                     </div>
//                     <div className='card-two'>
//                         <p className='price'> {cabin.price} kr per night</p>
//                         <p className='cainName'>{cabin.cabinName}</p>
//                         <p className='description'>{cabin.description}</p>
//                         <div className='star'>
//                            <p className='grades'>4,6</p>
//                            <span><Stars /></span>
//                            <span><Stars /></span>
//                            <span><Stars /></span>
//                            <span><Stars /></span>
//                            <span><Stars /></span>
//                             {/* <Stars />
//                             <Stars />
//                             <Stars />
//                             <Stars /> */}
//                         </div>
//                     </div>
//                     <div className='card-three'>
//                        <div className='cabin-like'><Like /></div> 
//                         <Link to={`/details/${cabin._id}`}> <button className='cabin-btn'>View deal</button></Link>
//                     </div>
//                  </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default CabinList

import React, { useContext, useEffect, useState } from 'react';
import { CabinsContext, useCabinContext } from '../../Context/cabinContext';
import Stars from '../../Components/Icons/Stars';
import Like from '../../Components/Icons/Like';
import { Link } from 'react-router-dom';

const CabinList = () => {
  const { getAllCabins, cabins } = useCabinContext()
  const [selectedCategory, setSelectedCategory] = useState('All'); // State för den valda kategorin
  const [filteredCabins, setFilteredCabins] = useState([]);
  

  useEffect(() => {
    getAllCabins();
  }, []);

  useEffect(() => {
    // Filtrera stugor baserat på vald kategori
    if (selectedCategory === 'All') {
      setFilteredCabins(cabins);
    } else {
      setFilteredCabins(cabins.filter((cabin) => cabin.category === selectedCategory));
    }
  }, [selectedCategory, cabins]);

  return (
    <div className='cabin-list'>
      {/* Implementera ditt filter här (exempelvis en dropdown eller knappar för varje kategori) */}
      <div>
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Budget')}>Budget</button>
        <button onClick={() => setSelectedCategory('Standard')}>Standard</button>
        <button onClick={() => setSelectedCategory('Deluxe')}>Deluxe</button>
      </div>

      {filteredCabins.map((cabin) => (
        <div key={cabin._id}>
          <div className='list'>
            <div className='card-one'>
              <img className='cabin-img' src={cabin.imageURL} alt='cabin' />
              <p className='cabin-category'>{cabin.category}</p>
            </div>
            <div className='card-two'>
              <p className='price'> {cabin.price} kr per night</p>
              <p className='cainName'>{cabin.cabinName}</p>
              <p className='description'>{cabin.description}</p>
              <div className='star'>
                <p className='grades'>4,6</p>
                <span>
                  <Stars />
                </span>
                <span>
                  <Stars />
                </span>
                <span>
                  <Stars />
                </span>
                <span>
                  <Stars />
                </span>
                <span>
                  <Stars />
                </span>
              </div>
            </div>
            <div className='card-three'>
              <div className='cabin-like'>
                <Like />
              </div>
              <Link to={`/details/${cabin._id}`}>
                {' '}
                <button className='cabin-btn'>View deal</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CabinList;
