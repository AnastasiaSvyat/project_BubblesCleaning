import React from 'react'
import classes from '../../../../Styles/pulseBtn.module.css'
import { NavLink } from 'react-router-dom'



function BtnBook(){
return(
    <div>
        <button className ={classes.pulse}><NavLink to="/Services" exact> Booking Online</NavLink></button>
    </div>
    )
}

export default BtnBook