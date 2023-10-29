import React, { useContext , useEffect, useState} from 'react'
import Stars from '../../Components/Icons/Stars'
import Like from '../../Components/Icons/Like'
import {CabinsContext} from '../../Context/cabinContext'
import {Link} from 'react-router-dom'

const CabinList = () => {

    const {getAllCabins, getData } = useContext(CabinsContext)
    useEffect(() => {
        getAllCabins()
    }, [])



    return (
        <div>
            {getData.map((cabin) => (
                <div key={cabin._id}>
                <div className='list'>         
                    <div className='card-one'>
                        <img src={cabin.imageURL} alt="cabin" />
                        <p>{cabin.category}</p>
                    </div>
                    <div className='card-two'>
                        <p className='price'> {cabin.price} kr per night</p>
                        <p className='cainName'>{cabin.cabinName}</p>
                        <p className='description'>{cabin.description}</p>
                        <div>
                           <p className='grades'>4,6</p>
                            <Stars />
                            <Stars />
                            <Stars />
                            <Stars />
                            <Stars />
                        </div>
                    </div>
                    <div className='card-three'>
                       <div><Like /></div> 
                        <Link to={`/details/${cabin._id}`}> <button>View deal</button></Link>
                    </div>
                 </div>
                </div>
            ))}
        </div>
    )
}

export default CabinList