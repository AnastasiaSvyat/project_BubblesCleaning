import React from 'react'
import LogoImg from '../../../../Assets/logoImg/logoImg'
import classes from '../../../../Styles/nav.module.css'
import { NavLink } from 'react-router-dom'



class NavMenuTel extends React.Component{
    constructor(){
        super()
    this.state = {
        show : false
    }
    this.onClick = this.onClick.bind(this)
}

onClick(){
    this.setState(prevState =>({
        show:!prevState.show
    }))
}

render(){
    return(
        <div>

<div className = {classes.telBtn}>
    
                <LogoImg/>
            
                <img className={classes.btn} onClick = {this.onClick} src="https://www.flaticon.com/svg/static/icons/svg/2948/2948225.svg" alt=""/>
            {this.state.show ? <div className = {classes.NavMenuTel}>
            <div className='navBar navBarTel'><NavLink to="/" exact> Home</NavLink></div> 
                <div className='navBar navBarTel'><NavLink to="/Services"> Services </NavLink></div>
                {/* <div className='navBar'><NavLink to="/Shop"> Shop </NavLink></div> */}
                <div className='navBar navBarTel' ><NavLink to="/OrderBox"> Your Order </NavLink> </div>

            </div> : null}
        </div>
        </div>

        
    )
}
}

export default NavMenuTel