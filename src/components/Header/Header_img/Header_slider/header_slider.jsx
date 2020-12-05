import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import BubbleCleaning from '../BubbleCleaning/BubbleCleaning';
import Nav from '../Header_Nav/nav';
import BtnBook from './BtnBook';

 
const slideImages = [
    'https://st4.depositphotos.com/6010472/20337/i/1600/depositphotos_203376426-stock-photo-detergents-cleaning-accessories-pink-color.jpg',
    'https://cdn.shopify.com/s/files/1/0057/9158/0227/files/Blueland_CleanSuite_01_3236_compressed_2_2ad33d0f-a067-4892-9fd3-70084eb1e93d_1600x.jpg?v=1595338125',
    'https://www.retailtechinc.com/wp-content/uploads/2020/04/jeshoots-com-__ZMnefoI3k-unsplash.jpg',
];
 
const Slider = () => {
    return (
      <div>

        <Fade>

          <div className="each-slide">
              <div className = 'slider' style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <Nav/>
              <BubbleCleaning/>
                <div className='sliderText slideUp'>Let Us Do Your <br/> Dirty Work</div>
              <BtnBook/>
              </div>
          </div>
          <div className="each-slide">
                <div className = 'slider' style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <Nav/>
            <BubbleCleaning/>
                <div className='sliderText slideUp'>Care For <br/> Your Home</div>
                <BtnBook/>
            </div>
          </div>
          <div className="each-slide">
              <div className = 'slider' style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <Nav/>
              <BubbleCleaning/> 
                <div className='sliderText slideUp'>Your Experts In Carpet <br/> And Upholstery</div>
                <BtnBook/>
            </div>
            
            
          </div>
        </Fade>
      </div>
    )
}
export default Slider