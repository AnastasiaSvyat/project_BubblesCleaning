import React from 'react'
import classes from '../../../Styles/order.module.css'



class ShowCalendar extends React.Component{
    constructor(props){
        super(props)
    }

render(){
    return(
        <div>
            <div>{this.props.calendar}</div>
  <div className ={classes.calendardate}>
      <p>{this.props.dateMonth}/{this.props.month + 1}/{this.props.year}</p>
      <img src="https://www.flaticon.com/svg/static/icons/svg/3079/3079026.svg" alt=""/>

      </div>
      <p>Date</p>
        </div>
    )
}
}

export default ShowCalendar