import React from 'react'
import Header from '../../Header/header'
import HomeSecondBox from './HomeSecondBox/HomeSecondBox'


class HomeApp extends React.Component{
    constructor(){
        super()
}    
render(){
        return(
            <div>
               <Header/>
                <HomeSecondBox/>

                
            </div>
        )
    }
}

export default HomeApp