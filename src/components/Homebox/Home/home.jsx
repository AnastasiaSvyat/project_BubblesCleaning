import React from 'react'
import Arrow from '../../Arrow/Arrow'
import Footer from '../../Footer/footer'
import Header from '../../Header/header'
import HomeSecondBox from './HomeSecondBox/HomeSecondBox'
import HomeThirdBox from './HomeThirdBox/HomeThirdBox'



class HomeApp extends React.Component{
    constructor(){
        super()
}    
render(){
        return(
            <div className='custom-section'>
               <Header/>
                <HomeSecondBox/>
                <HomeThirdBox/>
                <Footer/>
                <Arrow/>
                
            </div>
        )
    }
}

export default HomeApp