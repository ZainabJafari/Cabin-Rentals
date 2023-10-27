import React, { useContext , useEffect} from 'react'
import Stars from '../../Components/Icons/Stars'
import Like from '../../Components/Icons/Like'
import {CabinsContext} from '../../Context/cabinContext'
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
                        <button>View deal</button>
                    </div>
                 </div>
                </div>
            ))}
        </div>
    )
}

export default CabinList