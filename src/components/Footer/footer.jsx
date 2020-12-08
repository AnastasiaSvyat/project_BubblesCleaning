import React from 'react'
import firebase from 'firebase'
import classes from '../../Styles/footer.module.css'
import NumberFormat from 'react-number-format';
import instance from './instance';

const t ={
    name: 2
}
class Footer extends React.Component{
    constructor(){
        super()
        this.state ={
            number: ''
        }
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const db = firebase.database()
        console.log(db);
        
        
    }
    handleChange(e){
        
        this.setState({
            number:e.target.value
        })
      }
      handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
       instance
        .post('/User.json',this.state)
        .then((response) => {
            this.setState({
                number:e.target.value
            })
        })
        .catch((error) => {
            alert(error)
        })
      }
    
    render(){
        console.log(this.state);
        return(
            <div className={classes.container}>
                <div className={classes.container_text}>
                <h2>Have questions?</h2>
                <p>Enter your phone number and we will contact you as soon as possible!</p>
                <div className={classes.container_submitNumber}>
                    <NumberFormat onChange={this.handleChange} className={classes.inputNumber} format="+38 (###) ###-####" allowEmptyFormatting mask="_"/>
                    <button onClick={this.handleSubmit} className={classes.btnNumber}>BLA BLA</button>
                </div>
                </div>
                
               
              
             </div>
        )
    }

}

export default Footer