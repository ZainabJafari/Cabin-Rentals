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
            <div className="image-carousel-container">
                <div className='carousel-wrapper' >
                    <Carousel showThumbs={false} selectedItem={currentImageIndex}>
                        {cabinDetail.images.map((image, index) => (
                            <div className='carousel-image' key={index}>
                                <img className='carousel-images' src={image.image} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div>
                <button onClick={handlePreviousImage}><svg xmlns="http://www.w3.org/2000/svg" width="57" height="44" viewBox="0 0 57 44" fill="none">
                    <path d="M24.5006 1.09277C24.8412 1.38932 25.0373 1.79652 25.0457 2.22494C25.0541 2.65337 24.8742 3.06797 24.5456 3.37768L6.48244 20.3805L54.5838 19.4341C55.0578 19.4248 55.5156 19.5861 55.8567 19.8827C56.1978 20.1793 56.3942 20.5868 56.4026 21.0156C56.411 21.4444 56.2309 21.8593 55.9017 22.1691C55.5726 22.4788 55.1214 22.6581 54.6475 22.6674L6.54606 23.6139L25.2641 39.893C25.5857 40.1933 25.7656 40.5953 25.7656 41.0143C25.7657 41.4332 25.586 41.8365 25.2645 42.1392C24.9429 42.4418 24.5045 42.6202 24.0417 42.6367C23.5789 42.6532 23.1279 42.5065 22.7835 42.2276L0.958503 23.2494C0.617903 22.9529 0.421857 22.5457 0.413427 22.1173C0.404998 21.6888 0.584873 21.2742 0.913544 20.9645L21.9751 1.14247C22.3042 0.833123 22.755 0.654137 23.2285 0.64482C23.7021 0.635502 24.1596 0.796615 24.5006 1.09277Z" fill="#B7B5B5" />
                </svg></button>
                <button onClick={handleNextImage}><svg xmlns="http://www.w3.org/2000/svg" width="57" height="43" viewBox="0 0 57 43" fill="none">
                    <path d="M31.5072 41.955C31.1767 41.6472 30.9943 41.2337 31.0002 40.8052C31.0061 40.3768 31.1997 39.9684 31.5385 39.6698L50.1591 23.2793L2.05291 22.6198C1.57894 22.6133 1.12671 22.4367 0.79572 22.1289C0.464726 21.8211 0.282081 21.4073 0.28796 20.9785C0.293839 20.5496 0.487761 20.141 0.827068 19.8424C1.16637 19.5437 1.62327 19.3796 2.09724 19.3861L50.2034 20.0457L32.0392 3.15084C31.7277 2.84001 31.5614 2.43227 31.5753 2.01351C31.5892 1.59475 31.7823 1.19767 32.1138 0.905929C32.4453 0.614185 32.8893 0.450556 33.3524 0.449513C33.8155 0.44847 34.2615 0.610094 34.5963 0.900337L55.7757 20.5964C56.1062 20.9042 56.2886 21.3177 56.2827 21.7461C56.2768 22.1746 56.0832 22.583 55.7444 22.8816L34.033 41.9896C33.6937 42.2878 33.2372 42.4516 32.7636 42.4451C32.29 42.4386 31.8381 42.2623 31.5072 41.955Z" fill="#B7B5B5" />
                </svg></button>
            </div>
            <IconsDetail/>
        </div>
    );
};

export default ImageDetailCabin;
