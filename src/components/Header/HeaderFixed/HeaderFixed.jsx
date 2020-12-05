import React from 'react'
import Nav from '../Header_img/Header_Nav/nav'



class HeaderFixed extends React.Component{
    constructor(){
        super()
        this.state ={
            elemToScroll:false
        }
        
    }
    componentDidMount(){
       window.addEventListener('scroll',this.onScroll)

        }
       
    onScroll = (event) =>{
        
        if(window.pageYOffset > 50){
            this.setState({
                elemToScroll:true
            })
        }
        else{
            this.setState({
                elemToScroll:false
            })
        }
        console.log(window.pageYOffset);  
            

   
}    


render(){
        return(

            <div>
                
                <div>
        <div onScroll={this.onScroll}>
          {this.state.elemToScroll ?  <div className='headerFixed'>
            <Nav/>
        </div>: ''}
        </div>
      </div>
               
                
            </div>
        )
    }
}
export default HeaderFixed
