import React from 'react'
import NavMenu from '../Header_img/Header_Nav/nav'



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
    onScroll = () =>{
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
    }    
render(){
        return(
            <div>
                <div>
                    <div onScroll={this.onScroll}>
                        {this.state.elemToScroll ?  <div className='headerFixed'>
                            <NavMenu/></div>: ''}
                    </div>
                </div>
            </div>
        )
    }
}
export default HeaderFixed
