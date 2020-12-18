import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Wave from '../../../../Assets/Wave/Wave';
import BubbleCleaning from '../BubbleCleaning/BubbleCleaning';
import NavMenu from '../Header_Nav/nav';
import NavMenuTel from '../Header_Nav/NavMenuTel';

import BtnBook from './BtnBook';
import Media from 'react-media'

 
const slideImages = [
  {
     im: 'https://st4.depositphotos.com/6010472/20337/i/1600/depositphotos_203376426-stock-photo-detergents-cleaning-accessories-pink-color.jpg',
     text: 'Let Us Do Your',
     secondText: 'Dirty Work'
    
  },
  {
    im: 'https://cdn.sanity.io/images/0vv8moc6/infenctioncontrol/c63ed8dc9e7af32b2baa406ccb53350581bd492d-1540x800.jpg',
    text:'Care For',
    secondText:'Your Home'
   
 },
 {
  im: 'https://www.retailtechinc.com/wp-content/uploads/2020/04/jeshoots-com-__ZMnefoI3k-unsplash.jpg',
  text:'Your Experts In Carpet',
  secondText:'And Upholstery'
 
}
];
 
const Slider = () => {
    return (
      <div>
       <Fade>
          {slideImages.map(function(item,index){
            return <div key = {index}>
              <div className = 'slider' style={{'backgroundImage': `url(${item.im})`}}>
              <Media query={{ maxWidth: 599 }}>
          {matches =>
            matches ? (
              <NavMenuTel/>
            ) : (
              <NavMenu/> 
            )
          }
        </Media>
                {/* <NavMenu/> */}
                <BubbleCleaning/>
              <div className='sliderText slideUp'>{item.text}<br/>{item.secondText}</div>
                <BtnBook/>
                <Wave/>
              </div>
              </div>
          })}
        </Fade>
      </div>
    )
}
export default Slider