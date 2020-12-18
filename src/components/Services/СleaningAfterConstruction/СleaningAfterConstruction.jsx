import React from 'react'
import Footer from '../../Footer/footer'
import Header from '../../Header/header'
import RangeSlider from '../RangeSlider/RangeSlider'
import SaleBox from '../SaleBox/SaleBox'
import СleaningAfterConstructionTextBox from './СleaningAfterConstructionTextBox/СleaningAfterConstructionTextBox'


function СleaningAfterConstruction(){
    return(
        <div>
            <Header/>
            <СleaningAfterConstructionTextBox/>
            <RangeSlider price = {3}/>
            <SaleBox/>
            <Footer/>
        </div>
    )
}

export default СleaningAfterConstruction
