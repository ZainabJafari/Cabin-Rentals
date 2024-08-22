import React, { useEffect } from 'react';
import { useCabinContext } from '../../Context/cabinContext';
import Stars from '../../Components/Icons/Stars';
import Like from '../../Components/Icons/Like';
import { Link } from 'react-router-dom';

const CabinList = () => {
  const { getAllCabins, filteredCabins } = useCabinContext();

  useEffect(() => {
    getAllCabins();
  }, [getAllCabins]);

  return (
    <div className='container'>
      <div className='cabin-list'>
        {filteredCabins.map((cabin) => (
          <div key={cabin._id} className='cabin-card'>
            <div className='card-one'>
              <img className='cabin-img' src={cabin.imageURL} alt='cabin' />
              <p className='cabin-category'>{cabin.category}</p>
            </div>
            <div className='card-two'>
              <p className='price'>{cabin.price} kr per night</p>
              <p className='cabin-name'>{cabin.cabinName}</p>
              <p className='description'>{cabin.description}</p>
              <div className='star-rating'>
                <p className='grades'>4.6</p>
                {[...Array(5)].map((_, i) => (
                  <Stars key={i} />
                ))}
              </div>
            </div>
            <div className='card-three'>
              <div className='cabin-like'>
                <Like />
              </div>
              <Link className='btn-link' to={`/details/${cabin._id}`}>
                <button className='cabin-btn'>View deal</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabinList;
