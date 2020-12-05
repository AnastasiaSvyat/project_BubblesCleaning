import React from 'react'
import LogoImg from '../../../../Assets/logoImg/logoImg'
import { NavLink } from 'react-router-dom'
import OrderNavImg from '../../../../Assets/Order/order'


function Nav(){
    return(
        <div id='headerNavBox'>
                <LogoImg/>
            <div id='menu'>
                <div className='navBar'><NavLink to="/" exact> Home</NavLink></div> 
                <div className='navBar'><NavLink to="/Services"> Services </NavLink></div>
                <div className='navBar'><NavLink to="/Shop"> Shop </NavLink></div>
                <div className='navBar order'><NavLink to="/OrderBox"> Enjoy your shopping </NavLink></div>
                <OrderNavImg/>
            </div>
        </div>
    )
}
export default Nav