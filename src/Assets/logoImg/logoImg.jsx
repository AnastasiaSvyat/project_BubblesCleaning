import React from 'react'
import classes from '../../Styles/logoImg.module.css'


function LogoImg(){
    return(
        <div className = {classes.logo}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/2101/2101422.svg" alt="Logo"/>
        </div>
    )
}

export default LogoImg