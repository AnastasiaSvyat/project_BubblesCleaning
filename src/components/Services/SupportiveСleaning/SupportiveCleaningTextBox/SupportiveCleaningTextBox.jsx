import React from 'react'
import SecondWave from '../../../../Assets/SecondWave/Secondwave'
import classes from '../../../../Styles/home.module.css'


function SupportiveCleaingTextBox(){
    return(
        <div>
            <div className={classes.containerSecond}>
                <div className={classes.secondBox_left}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3YjkeuGqgc9RSt52gOBjMi3CUjcQqSEdog&usqp=CAU" alt=""/>
                </div>
                <div className={classes.secondBox_right}>
                    <h2>Supportive Cleaing</h2>
                    <p>Any problem is easier to prevent than to solve.
                        It is on this principle that maintenance cleaning is built for
                        cleanliness and order in your home. But let's be honest:
                        there is often not enough time for this. Therefore, the best 
                        solution is Bubble Cleaning.</p>
                </div>
            </div>
            <SecondWave/>
        </div>
        
    )
}
export default SupportiveCleaingTextBox