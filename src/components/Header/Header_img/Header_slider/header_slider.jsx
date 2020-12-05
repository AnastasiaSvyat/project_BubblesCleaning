import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Wave from '../../../../Assets/Wave/Wave';
import BubbleCleaning from '../BubbleCleaning/BubbleCleaning';
import Nav from '../Header_Nav/nav';
import BtnBook from './BtnBook';

 
const slideImages = [
    'https://st4.depositphotos.com/6010472/20337/i/1600/depositphotos_203376426-stock-photo-detergents-cleaning-accessories-pink-color.jpg',
    'https://cdn.sanity.io/images/0vv8moc6/infenctioncontrol/c63ed8dc9e7af32b2baa406ccb53350581bd492d-1540x800.jpg',
    'https://www.retailtechinc.com/wp-content/uploads/2020/04/jeshoots-com-__ZMnefoI3k-unsplash.jpg',
];
 
const Slider = () => {
    return (
      <div>
        <Fade>
          <div>
            <div className = 'slider' style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <Nav/>
              <BubbleCleaning/>
              <div className='sliderText slideUp'>Let Us Do Your <br/> Dirty Work</div>
              <BtnBook/>
              <Wave/>
            </div>
          </div>
          <div>
            <div className = 'slider' style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <Nav/>
              <BubbleCleaning/>
              <div className='sliderText slideUp'>Care For <br/> Your Home</div>
              <BtnBook/>
              <Wave/>
            </div>
          </div>
          <div>
            <div className = 'slider' style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <Nav/>
              <BubbleCleaning/> 
              <div className='sliderText slideUp'>Your Experts In Carpet <br/> And Upholstery</div>
              <BtnBook/>
              <Wave/>
            </div>
          </div>
        </Fade>
      </div>
    )
}
export default Slider