import React from 'react'
import classes from '../../../Styles/services.module.css'
import Sale from './Sale/Sale'


function SaleBox(){
  return(
    <div className = {classes.saleBox}>
        <h2>Click on the coupon right now and <br/> get a 20% promo code</h2>
        <Sale/>
    </div>
        )
    
}

export default SaleBox