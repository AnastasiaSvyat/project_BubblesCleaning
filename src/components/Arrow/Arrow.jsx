import React from 'react'



class Arrow extends React.Component{
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
        if(window.pageYOffset > 150){
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
onClick(){
    window.scrollTo(window.pageXOffset, 0);
} 
render(){
        return(
            <div>
                <div>
                    <div onScroll={this.onScroll} onClick = {this.onClick}>
                        {this.state.elemToScroll ?  <div className='arrowFixed'>^
                            </div>: ''}
                    </div>
                </div>
            </div>
        )
    }
}
export default Arrow
