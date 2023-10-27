import { Component } from 'react'
import acti1 from '../../assets/acti1.png'
import acti2 from '../../assets/acti5.jpeg'
import acti3 from '../../assets/acti3.jpeg'

class HomeSliderPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            images: [acti1, acti2, acti3]
        }
    }
    nextSlide = () => {
        console.log('Next button clicked');

        this.setState((prevState) => ({
            currentSlide: (prevState.currentSlide + 1) % this.state.images.length,

        }))
    }
    previousSlide = () => {
        this.setState((prevState) => ({
            currentSlide: (prevState.currentSlide - 1 + this.state.images.length) % this.state.images.length,
        }));
    }
    render() {
        const { currentSlide, images } = this.state;
        return (
            <div>
                <h2 className='slide-text'>Explore our activities</h2>
            <div className='slider'>
                <div className='slide'>
                    <img src={images[currentSlide]} alt="imgaes" />
                    <button onClick={this.nextSlide} className='next-button'> <svg xmlns="http://www.w3.org/2000/svg" width="33" height="58" viewBox="0 0 33 58" fill="none">
                        <line x1="31.0521" y1="27.7678" x2="2.7678" y2="56.052" stroke="white" stroke-width="5" />
                        <line x1="30.5165" y1="30.7678" x2="2.23227" y2="2.48349" stroke="white" stroke-width="5" />
                    </svg> </button>
                    <button onClick={this.previousSlide} className='before-button'><svg xmlns="http://www.w3.org/2000/svg" width="33" height="58" viewBox="0 0 33 58" fill="none">
                        <line x1="2.23223" y1="30.2322" x2="30.5165" y2="1.94796" stroke="white" stroke-width="5" />
                        <line x1="2.76777" y1="27.2322" x2="31.052" y2="55.5165" stroke="white" stroke-width="5" />
                    </svg></button>
                </div>
            </div>
            </div> 
        )
    }
}

export default HomeSliderPart


// import React, { Component } from 'react';
// // import acti2 from '../../assets/acti2.jpeg'
// import acti2 from '../../assets/homeImg1.png'
// import acti3 from '../../assets/homeImg2.png'

// class ImageSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentSlide: 0,
//       images: [
//        acti2, acti3
//       ],
//     };
//   }

//   nextSlide = () => {
//     this.setState((prevState) => ({
//       currentSlide: (prevState.currentSlide + 1) % this.state.images.length,
//     }));
//   }

//   render() {
//     const { currentSlide, images } = this.state;
//     return (
//       <div className="slider">
//         <img src={images[currentSlide]} alt={`Bild ${currentSlide + 1}`} />
//         <button onClick={this.nextSlide} className='next-button'>Next</button>
//       </div>
//     );
//   }
// }

// export default ImageSlider;
