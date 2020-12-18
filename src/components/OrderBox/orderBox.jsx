import React from 'react'
import NavMenu from '../Header/Header_img/Header_Nav/nav'
import classes from '../../Styles/order.module.css'
import OrderInfo from './OrderInfo/OrderInfo'
import Media from 'react-media'
import NavMenuTel from '../Header/Header_img/Header_Nav/NavMenuTel'



function OrderBox(props){
    
    return(
        <div className = {classes.f}>
            
            
            <Media query={{ maxWidth: 599 }}>
          {matches =>
            matches ? (
              <NavMenuTel/>
            ) : (
                <div className = {classes.nav}>
              <NavMenu/> 

                </div>
            )}
            </Media>
            <OrderInfo propsValueAllPrice = {props.location.propsValueAllPrice} />
        </div>
        
    )
}

export default OrderBox