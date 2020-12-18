import React from 'react'
import firebase from 'firebase'
import classes from '../../Styles/footer.module.css'
import NumberFormat from 'react-number-format';
import instance from './instance';


class Footer extends React.Component{
    constructor(){
        super()
        this.state ={
            number: '',
            show: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleChange(e){
        this.setState({
            number:e.target.value
        })
      }
      handleSubmit(e) {
        e.preventDefault();
       instance
        .post('/User.json',this.state)
        .then((response) => {
            this.setState({
                number:e.target.value,
                show:true
                
            })
        })
        .catch((error) => {
            alert(error)
        })
        
        
      }
    render(){
        let {number} = this.state
        return(
            <div>
            <div className={classes.container}>
               

               <div className={classes.container_text}>
               <h2>Have questions?</h2>
               <p>Enter your phone number and we will contact you as soon as possible!</p>
               <div className={classes.container_submitNumber}>
                   <NumberFormat onChange={this.handleChange} className={classes.inputNumber} format="+38 (###) ###-####" allowEmptyFormatting mask="_"/>
                   <button onClick={this.handleSubmit} className={classes.btnNumber}>
                       
                   </button>
                   <p>
                       {this.state.show ? 'Wait! You will be called within 30 minutes' :''}
                    </p>
               </div>
               </div>
           </div>
            </div>
            
        )
    }
}

export default Footer