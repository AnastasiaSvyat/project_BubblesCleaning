import React from 'react'
import ThirdWave from '../../../../Assets/ThirdWave/ThirdWave';
import classes from '../../../../Styles/services.module.css'
import instance from '../../../Footer/instance';
import OrderInfo from '../../../OrderBox/OrderInfo/OrderInfo';

// import instance from '../../../instance';


class Sale extends React.Component{
    constructor(){
        super()
        this.state = {
            show:false,
            promoCode:'',
           
        }
        this.onClick = this.onClick.bind(this);

    }
   
    onClick(e){
        
        e.preventDefault();
        instance
         .get('/Sale.json')
         .then((response) => {
            let arr = response.data
            var rand = Math.floor(Math.random() * arr.length)
            this.setState({
                show:true,
                promoCode:arr[rand],
                
            })
            

        })
         .catch((error) => {
            alert(error)
        })

        
         
    }
    render(){
        let {promoCode} = this.state
       
        return(
            <div>
                <div onClick = {this.onClick} className = {classes.saleCoupon} >
                    
                    {this.state.show ? 
                    <p style = {{ animation: 'none'}} >Your promo code is <br/>{promoCode}</p> 
                    :<p>Click and Catch <br/>Your Promo Code</p>}
                    
                </div>
            </div>
           
        )
    }
}

export default Sale