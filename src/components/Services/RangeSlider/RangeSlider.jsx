import React from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import classes from '../../../Styles/rangeSlider.module.css'
import TablePrice from './tablePrice/tablePrice'


class RangeSlider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 10,
    }
  }
  handleChange = value => {
    this.setState({
      value: value,
    })
  };
 render () {
    const { value } = this.state
    return (
        <div>
          <div className = {classes.rangeSliderBox}>
          <div  className = {classes.rangeSlider_left}>
              <h2>CALCULATE THE COST OF CLEANING</h2>
            <p>Room area:  {value} m<sup>2</sup></p>
              <p>Price: m<sup>2</sup> = {this.props.price}</p>
            <Slider className = {classes.rangeSlider}
              min={0}
              max={500}
              value={value} 
              onChange={this.handleChange}
            />
            <TablePrice price = {this.props.price} value ={value} />
          </div>
          </div>
        </div>
    )
  }
}

export default RangeSlider