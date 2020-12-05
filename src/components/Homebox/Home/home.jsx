import React from 'react'
import Arrow from '../../Arrow/Arrow'
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
                <Arrow/>
            </div>
        )
    }
}

export default HomeApp