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
        <div className='cabin-list'>
            {getData.map((cabin) => (
                <div key={cabin._id}>
                <div className='list'>         
                    <div className='card-one'>
                        <img className='cabin-img' src={cabin.imageURL} alt="cabin" />
                        <p className='cabin-category'>{cabin.category}</p>
                    </div>
                    <div className='card-two'>
                        <p className='price'> {cabin.price} kr per night</p>
                        <p className='cainName'>{cabin.cabinName}</p>
                        <p className='description'>{cabin.description}</p>
                        <div className='star'>
                           <p className='grades'>4,6</p>
                           <span><Stars /></span>
                           <span><Stars /></span>
                           <span><Stars /></span>
                           <span><Stars /></span>
                           <span><Stars /></span>
                            {/* <Stars />
                            <Stars />
                            <Stars />
                            <Stars /> */}
                        </div>
                    </div>
                    <div className='card-three'>
                       <div className='cabin-like'><Like /></div> 
                        <Link to={`/details/${cabin._id}`}> <button className='cabin-btn'>View deal</button></Link>
                    </div>
                 </div>
                </div>
            ))}
        </div>
    )
}

export default CabinList