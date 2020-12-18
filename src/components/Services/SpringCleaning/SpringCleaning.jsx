import React from 'react'
import Footer from '../../Footer/footer'
import Header from '../../Header/header'
import RangeSlider from '../RangeSlider/RangeSlider'
import SaleBox from '../SaleBox/SaleBox'
import SpringCleaningTextBox from './SpringCleaningTextBox/SpringCleaningTextBox'


function SpringCleaning(){
    return(
        <div>
            <Header/>
            <SpringCleaningTextBox/>
            <RangeSlider price = {2}/>
            <SaleBox/>
            <Footer/>
        </div>
    )
}

export default SpringCleaning
