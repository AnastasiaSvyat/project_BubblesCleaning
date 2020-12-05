import React from 'react'
import HeaderFixed from './HeaderFixed/HeaderFixed'
import Slider from './Header_img/Header_slider/header_slider'

class Header extends React.Component{
    constructor(){
        super()
}    
render(){
        return(
            <div>
                <HeaderFixed/>
                <Slider/>
            </div>
        )
    }
}

export default Header