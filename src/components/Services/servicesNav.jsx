import React from 'react'
import Header from '../Header/header'
import SaleBox from './SaleBox/SaleBox'
import ServicesSecondBox from './ServicesSecondBox/ServicesSecondBox'
import Footer from '../Footer/footer'




function ServicesNav(){
    return(
        <div>
            <Header/>
            <ServicesSecondBox/>
            <SaleBox/>
            <Footer/>
            
        </div>
    )
}

export default ServicesNav