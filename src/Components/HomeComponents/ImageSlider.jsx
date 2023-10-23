// import {Component} from 'react'
// import acti1 from '../../assets/acti1.png'
// import acti2 from '../../assets/acti2.jpeg'
// import acti3 from '../../assets/acti3.jpeg'

// class HomeSliderPart extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             currentSlide: 0,
//             images: [ acti1, acti2, acti3]
//         }
//     }
//     nextSlide = () =>{
//         console.log('Next button clicked');

//         this.setState((prevState) => ({
//             currentSlide: (prevState.currentSlide + 1) % this.state.images.length,
            
//         }))
//     }
//     render() {
//         const {currentSlide, images} = this.state;
//         return(
//             <div className='slider'>
//                 <div className='slide'>
//                     <img src={images[currentSlide]} alt="imgaes" />
//                     <button onClick={this.nextSlide} className='next-button'>nästa</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default HomeSliderPart

import React, { Component } from 'react';
import acti1 from '../../assets/acti1.png'
import acti2 from '../../assets/acti2.jpeg'
import acti3 from '../../assets/acti2.jpeg'

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      images: [
       acti1, acti2, acti3
      ],
    };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % this.state.images.length,
    }));
  }

  render() {
    const { currentSlide, images } = this.state;
    return (
      <div className="slider">
        <img src={images[currentSlide]} alt={`Bild ${currentSlide + 1}`} />
        <button onClick={this.nextSlide} className='next-button'>Next</button>
      </div>
    );
  }
}

export default ImageSlider;
