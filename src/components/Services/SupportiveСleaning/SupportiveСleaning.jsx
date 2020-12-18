import React from 'react'
import Footer from '../../Footer/footer'
import Header from '../../Header/header'
import RangeSlider from '../RangeSlider/RangeSlider'
import SaleBox from '../SaleBox/SaleBox'
import SupportiveCleaningTextBox from './SupportiveCleaningTextBox/SupportiveCleaningTextBox'


class SupportiveСleaning extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <SupportiveCleaningTextBox/> 
                <RangeSlider price = {1.5}/>  
                <SaleBox/>
                <Footer/>            

            </div>
        )
    }

}

export default SupportiveСleaning