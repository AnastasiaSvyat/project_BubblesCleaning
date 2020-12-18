import React from 'react'
import TotalPriceBox from '../TotalPriceBox/TotalPriceBox';
import Slider from 'react-rangeslider'
import classes from '../../../../Styles/rangeSlider.module.css'



class TablePrice extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           valueСarpet: 0,
           valueSofa:0,
           valueWindow:0,
           valueRefrigerator:0,
           valueDrawers:0,
           valueLamps:0,
           valueNewCarpet:0
        }
    }
    handleChangeSofa = valueSofa => {
        this.setState({
            valueSofa: valueSofa,
        })
      };
    handleChangeWindow = valueWindow => {
        this.setState({
            valueWindow: valueWindow,
        })
      };
    handleChangeRefrigerator = valueRefrigerator => {
        this.setState({
            valueRefrigerator: valueRefrigerator,
        })
      };
    handleChangeDrawers = valueDrawers => {
        this.setState({
            valueDrawers: valueDrawers,
        })
      };
    handleChangeLamps = valueLamps => {
        this.setState({
            valueLamps: valueLamps,
        })
      };
    handleChangeNewCarpet = valueNewCarpet => {
        this.setState({
            valueNewCarpet: valueNewCarpet,
        })
      };


render(){
    const { valueSofa } = this.state
    const { valueRefrigerator } = this.state
    const { valueWindow } = this.state
    const { valueLamps } = this.state
    const { valueDrawers } = this.state
    const { valueNewCarpet } = this.state
return(
        <div>
            <h3>Additional Services</h3>
            <h3>Price : 2$</h3>
        <div className = {classes.container_sliderServies}>
            <div>
                <div className = {classes.sliderServies}>
                    
                    <img src="https://cleansheff.com.ua/template/cleanCheff/upload/products/1.svg" alt=""/>
                    <p className = {classes.name_services}>Carpet</p>
                    <Slider className = {classes.sliderServies_slider}
                        min={0}
                        max={50}
                        value={valueNewCarpet}  
                        onChange={this.handleChangeNewCarpet}
                    />
                    <p className = {classes.price}>2$ per m<sup>2</sup></p>
                </div>
                <div className = {classes.sliderServies}>
                    <img src="https://cleansheff.com.ua/template/cleanCheff/upload/products/2.svg" alt=""/>
                    <p className = {classes.name_services}>Sofa</p>
                    <Slider className = {classes.sliderServies_slider}
                        min={0}
                        max={10}
                        value={valueSofa}  
                        onChange={this.handleChangeSofa}
                    />
                    <p>10$ per piece</p>
                </div>
                <div className = {classes.sliderServies}>
                    <img src="https://cleansheff.com.ua/template/cleanCheff/upload/products/4.svg" alt=""/>
                    <p className = {classes.name_services}>Window Washing</p>
                    <Slider className = {classes.sliderServies_slider}
                        min={0}
                        max={50}
                        value={valueWindow} 
                        onChange={this.handleChangeWindow}
                    />
                    <p className = {classes.price}>2$ per m<sup>2</sup></p>
                </div>
                <div className = {classes.sliderServies}>
                    <img src="https://cleansheff.com.ua/template/cleanCheff/upload/products/6.svg" alt=""/>
                    <p className = {classes.name_services}>Internal cleaning <br/>of the refrigerator</p>
                    <Slider className = {classes.sliderServies_slider}
                        min={0}
                        max={10}
                        value={valueRefrigerator} 
                        onChange={this.handleChangeRefrigerator}
                    />
                    <p className = {classes.price}>20$ per piece</p>
                </div>
                <div className = {classes.sliderServies}>
                    <img src="https://cleansheff.com.ua/template/cleanCheff/upload/products/8.svg" alt=""/>
                    <p className = {classes.name_services}>Disassembly and washing <br/>of drawers and shelves</p>
                    <Slider className = {classes.sliderServies_slider}
                        min={0}
                        max={20}
                        value={valueDrawers} 
                        onChange={this.handleChangeDrawers}
                    />
                    <p className = {classes.price}>10$ per piece</p>
                </div>
                <div className = {classes.sliderServies}>
                    <img src="https://cleansheff.com.ua/template/cleanCheff/upload/products/10.svg" alt=""/>
                    <p className = {classes.name_services}>Washing Lamps</p>
                    <Slider className = {classes.sliderServies_slider}
                        min={0}
                        max={50}
                        value={valueLamps} 
                        onChange={this.handleChangeLamps}
                    />
                    <p>5$ per piece</p>
                </div>
            </div>
            <div>
                <TotalPriceBox valueRefrigerator={valueRefrigerator * 20} valueDrawers={valueDrawers * 10} valueNewCarpet = {valueNewCarpet * 2} price = {this.props.price} value ={this.props.value} valueSofa = {valueSofa * 10} valueWindow = {valueWindow * 2} valueLamps= {valueLamps * 5} />     
            </div>         
        </div>
        </div>
    )
}
}

export default TablePrice