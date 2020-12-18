import React from 'react'
import classes from '../../../Styles/services.module.css'
import { NavLink } from 'react-router-dom'
import SecondWave from '../../../Assets/SecondWave/Secondwave'




const services = [
    {
        name:'Supportive Сleaning',
        linkImg:<NavLink to="/Services_SupportiveСleaning"><img src="https://cleansheff.com.ua/template/cleanCheff/upload/blog/prev_1.jpg" alt=""/></NavLink>,
        link:<NavLink to="/Services_SupportiveСleaning">Book Now</NavLink>,

    },
    {
        name:'Spring Сleaning',
        linkImg:<NavLink to="/Services_SpringСleaning"><img src="https://cleansheff.com.ua/template/cleanCheff/upload/blog/prev_2.jpg" alt=""/></NavLink>,
        link:<NavLink to="/Services_SpringСleaning">Book Now</NavLink>,



    },
    {
        name:'Сleaning After Construction',
        linkImg:<NavLink to="/Services_СleaningAfterConstruction"> <img src="https://cleansheff.com.ua/template/cleanCheff/upload/blog/prev_3.jpg" alt=""/> </NavLink>,
        link:<NavLink to="/Services_СleaningAfterConstruction">Book Now</NavLink>,

    }
] 
class ServicesSecondBox extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className = {classes.container}>
                {services.map(function(item,index){
                   return <div key = {index}>
                       <div className = {classes.container_img}>
                           <div>{item.linkImg}</div>
                            <h2>{item.name}</h2>
                            <button className = {classes.btn}>{item.link}</button>
                       </div>
                   </div>
                })}
                <SecondWave/>
                
               
                    
            </div>
        )
    }
}

export default ServicesSecondBox
