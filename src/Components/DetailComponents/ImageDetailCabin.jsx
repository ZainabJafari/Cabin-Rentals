import React, { useEffect, useContext, useState } from 'react';
import { CabinsContext, useCabinContext } from '../../Context/cabinContext';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import IconsDetail from './IconsDetail';


const ImageDetailCabin = () => {
    const { getCabinById, cabinDetail } = useCabinContext()
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if(id){
            getCabinById(id);
        }
    }, [id]);

    if (!cabinDetail || !cabinDetail.images || cabinDetail.images.length === 0) {
        return <div>Bilder finns inte</div>;
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cabinDetail.images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + cabinDetail.images.length) % cabinDetail.images.length);
    };
    console.log("cabin")
    return (
        <div>
            <img className='detail-img' src={cabinDetail.imageURL} alt="" />
            <div className="image-container">
                <div className='detail-images-wrapper' >
                        {cabinDetail.images.map((image, index) => (
                            <div className='detail-images-style' key={index}>
                                <img className='detail-image-style' src={image.image} alt={`Image ${index}`} />
                            </div>
                        ))}
                </div>
            </div>
            <div className="image-carousel-container">
                <div className='carousel-wrapper' >
                    <Carousel showThumbs={false} selectedItem={currentImageIndex}>
                        {cabinDetail.images.map((image, index) => (
                            <div className='carousel-images' key={index}>
                                <img className='carousel-image' src={image.image} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <IconsDetail/>
        </div>
    );
};

export default ImageDetailCabin;
