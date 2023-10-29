import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react'
// import {CabinsContext} from '../../Context/cabinContext'
import { useParams } from 'react-router-dom'


const ImageDetailCabin = () => {
    // const {cabinGetById, getCabinDetail} = useContext(CabinsContext)
    
    const { id } = useParams()
    const [getCabinDetail, setCabinDetail] = useState()

    useEffect(() => {
        cabinGetById()
    }, [id])

    const cabinGetById = async () => {
        const result = await axios.get('http://localhost:7777/api/cabin/' + id)
        if (result.data) {
            setCabinDetail(result.data)
            console.log('suuuuuu');
        }
    }

    if (!getCabinDetail || !id) {
        return <div>finns inte</div>
    }

    return (
        <div className='slid'>
           <img className='cabin-img' src={getCabinDetail.imageURL} alt="cabin" />
            {getCabinDetail.images.map(image => (
                <img className='slider-img' key={image.image} src={image.image} alt="cabin" />
            ))}
        </div>
    )
}

export default ImageDetailCabin