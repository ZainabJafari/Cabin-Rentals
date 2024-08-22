import React, { useEffect, useState } from 'react';
import { useCabinContext } from '../../Context/cabinContext';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import IconsDetail from './IconsDetail';

const ImageDetailCabin = () => {
    const { getCabinById, cabinDetail } = useCabinContext();
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (id) {
            getCabinById(id);
        }
    }, [id, getCabinById, id]);


    if (!cabinDetail || !cabinDetail.images || cabinDetail.images.length === 0) {
        return <div>No images available</div>;
    }

    return (
        <div className="image-detail-container">
            {/* Image Carousel */}
            <div className="image-carousel-container">
                <img className='image-carousel-container' src={cabinDetail.imageURL} alt="" />
           {/*      <Carousel
                    selectedItem={currentImageIndex}
                    onChange={index => setCurrentImageIndex(index)}
                    showThumbs={false}
                    infiniteLoop
                    autoPlay
                >
                    {cabinDetail.images.map((image, index) => (
                        <div key={index}>
                            <img className="carousel-image" src={image.image} alt={`Image ${index}`} />
                        </div>
                    ))}
                </Carousel> */}
            </div>

            {/* Thumbnails */}
            <div className="image-thumbnail-wrapper">
                {cabinDetail.images.map((image, index) => (
                    <img
                        key={index}
                        className={`thumbnail-image ${index === currentImageIndex ? 'active' : ''}`}
                        src={image.image}
                        alt={`Thumbnail ${index}`}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>

            <IconsDetail />
        </div>
    );
};

export default ImageDetailCabin;
