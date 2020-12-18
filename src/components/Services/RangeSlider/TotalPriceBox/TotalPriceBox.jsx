import React from 'react'
import classes from '../../../../Styles/rangeSlider.module.css'
import { Link } from 'react-router-dom'


class TotalPriceBox extends React.Component{
    render(){
       return(
            <div>
               <div className = {classes.totalPriceBox}>
                    <h3>Total approximate cost:</h3>
                    <p>{this.props.state}</p>
                    <p>{this.props.price * this.props.value + this.props.valueSofa + this.props.valueWindow + this.props.valueNewCarpet + this.props.valueRefrigerator + this.props.valueLamps + this.props.valueDrawers}$</p>
                    <button><Link  to={{
                        pathname: "/OrderBox",
                        propsValueAllPrice: this.props.price * this.props.value + this.props.valueSofa + this.props.valueWindow + this.props.valueNewCarpet + this.props.valueRefrigerator + this.props.valueLamps + this.props.valueDrawers,
                        


                    }}> Order Cleaning </Link></button>
                </div>
            </div>
        )
    }
}

export default TotalPriceBox
