import React from 'react'
import ThirdWave from '../../../../Assets/ThirdWave/ThirdWave'

import classes from '../../../../Styles/home.module.css'

const HomeThirdBoxImg = [
        {
        img:"https://www.flaticon.com/svg/static/icons/svg/1211/1211462.svg" ,
        text:'Deep Vacuuming',
        imgArrow:'https://www.flaticon.com/svg/static/icons/svg/892/892655.svg'
    },
        {
        img:"https://www.flaticon.com/svg/static/icons/svg/2796/2796646.svg",
        text:`Stop & Stain Removal`,
        imgArrow:'https://www.flaticon.com/svg/static/icons/svg/892/892655.svg'
    },
        {
        img: "https://www.flaticon.com/svg/static/icons/svg/2890/2890930.svg",
        text:'Hot Water Extraction',
        imgArrow:'https://www.flaticon.com/svg/static/icons/svg/892/892655.svg'
    },
        {
        img:"https://www.flaticon.com/svg/static/icons/svg/2554/2554159.svg" ,
        text:'Add Protection',
        imgArrow:"https://www.flaticon.com/svg/static/icons/svg/3248/3248230.svg"
        
    }
]

class HomeThirdBox extends React.Component{
    constructor(){
        super()
        this.state ={
            hover: false
        }
    }
    handleMouseIn(){
        this.setState({
            hover:true
        })
    }
    handleMouseOut(){
        this.setState({
            hover:false
        })
    }
    render(){
        const tooltipStyle = {
            display: this.state.hover ? 'block' : 'none'
          }
        return(
            <div className={classes.containerThird}>
                <h2>Steps</h2>
                <p>Our Process</p>
    
                <div className = {classes.step_container}>
                {HomeThirdBoxImg.map((item, index) => {
                    return <div key={index} >
                        <div className={classes.tooltipStyle} style={tooltipStyle}>{item.text}</div>
                        <div onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} className ={classes.step_img}>
                            < img src={item.img} alt=""/>
                        </div>
                        <div className={classes.step_img}>
                            <div className={classes.circle}>{index + 1}</div>
                            <div className={classes.imgArrow}>{<img src={item.imgArrow} alt=""/>}</div> 
                        </div>
                    </div>
                })}
                </div>
                <ThirdWave/>
            </div>
        )
    }
}
export default HomeThirdBox