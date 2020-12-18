import React from 'react'
import classes from '../../../Styles/order.module.css'
import CalendarNav from './calendar'

import { NavLink } from 'react-router-dom'

import NumberFormat from 'react-number-format';
import instance from '../../Footer/instance';


class OrderInfo extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            promoCode:[],
            promoCodeValue:'',
            email: '',
            name: '',
            tel:'',
            adrs:'',
            click:false,
            show:false,
            data:''
            
            
            
        }
        this.handleChangeAdrs = this.handleChangeAdrs.bind(this);
        this.onClickOrderBtn = this.onClickOrderBtn.bind(this);
        this.handleChangeTel = this.handleChangeTel.bind(this);

        this.handleChangepromoCodeValue = this.handleChangepromoCodeValue.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

        this.onClick = this.onClick.bind(this);
    }
    
   componentDidMount(){
    instance
    .get('/Sale.json')
    .then((response) => {
      
       let arr = response.data
      
       this.setState({
           
           promoCode:arr.map((item) => item)
       })
    })
    .catch((error) => {
       alert(error)
   })
   
        
   }
    
    handleChangepromoCodeValue(event) {
        this.setState({
            promoCodeValue: event.target.value,
           
        });
       
      }
      handleChangeEmail(event) {
        this.setState({
            email: event.target.value,
        });
       
      }
      handleChangeName(event) {
        this.setState({
            name: event.target.value,
        });
       
      }
      handleChangeAdrs(event) {
        this.setState({
            adrs: event.target.value,
        });
       
      }
      handleChangeTel(event) {
        this.setState({
            tel: event.target.value,
            
        });
       
      }
      onClick(event){
        event.preventDefault()
        this.setState({
            click:true
        })
    }
    onClickOrderBtn(e){
        e.preventDefault();
        instance
        .post('/order.json',this.state)
        .then((response) => {
            this.setState({
                promoCodeValue:e.target.value,
                email: e.target.value,
                name:e.target.value,
                tel:e.target.value,
                adrs:e.target.value,
            
                
            })
        })
        .catch((error) => {
            alert(error)
        })
        this.setState({
            show:true,
        })
    }
    render(){
        let {promoCode} = this.state
        
      
     
        

   

        return(
            <div>
                <h1>Your order in Bubble Cleaning</h1>
                <div className = {classes.container}>
                    <div className = {classes.container_left}>
                        <div>
                            <form>
                                <input type="text" onChange={this.handleChangeName} value={this.state.name} placeholder='Enter your name...'/><br/>
                                    <p>Name</p>
                                <input  type="email" value={this.state.email} placeholder='Enter your email...' onChange={this.handleChangeEmail}/>
                                    <p>Email</p>
                                <NumberFormat value={this.state.tel} className={classes.inputNumber} onChange={this.handleChangeTel}  format="+38 (###) ###-####" allowEmptyFormatting mask="_"/><br/>
                                    <p>Phone Number</p>
                                <input type="text" onChange={this.handleChangeAdrs} value = {this.state.adrs} placeholder='Enter your address...'/>
                                    <p>Address</p>
                                    <div>
                                    <input type="text" value = {this.state.promoCodeValue} onChange={this.handleChangepromoCodeValue} placeholder='Enter your promo code...'/>
                                    <button className = {classes.promoBtn} onClick = {this.onClick}>Click</button>
                                    </div>
                                    <p>Promo Code</p>
                                </form>
                        </div>
                        <div>
                            <CalendarNav/>
                        </div>
                    </div>
                    <div className = {classes.container_right}>
                        <h2>Approximate cost of your order:</h2>
                        <div>
                       
                        </div>
        <p>{this.props.propsValueAllPrice}$</p>
                       <p>{this.state.click?
     (() => {
        
        switch (this.state.promoCodeValue) {
          case "": 
            return null;
           
        
            case promoCode[0]:return 'Discounted Price: ' +this.props.propsValueAllPrice  * 0.8 + '$'
            case promoCode[1]:  return 'Discounted Price: ' +this.props.propsValueAllPrice  * 0.8 + '$'
            case promoCode[2]:  return 'Discounted Price: ' +this.props.propsValueAllPrice  * 0.8 + '$'
             case promoCode[3]:  return 'Discounted Price: ' + this.props.propsValueAllPrice  * 0.8 + '$'
            default:      return null;
        }

      })() : ''
    }</p>
                        
                        <button onClick = {this.onClickOrderBtn}>Booking Now </button>
                        {this.state.show ? <div className = {classes.finilBox}>
                            <h1>Thank you for choosing the company Bubbles Cleaning</h1>
                            <button><NavLink to="/" exact> Home</NavLink></button>

                        </div> : ''}
                    </div>
                </div>
            </div>
        )
    }
}
export default OrderInfo