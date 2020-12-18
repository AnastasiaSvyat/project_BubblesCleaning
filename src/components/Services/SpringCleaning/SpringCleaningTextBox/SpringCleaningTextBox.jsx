import React from 'react'
import SecondWave from '../../../../Assets/SecondWave/Secondwave'
import classes from '../../../../Styles/home.module.css'


function SupportiveCleaingTextBox(){
    return(
        <div>
            <div className={classes.containerSecond}>
                <div className={classes.secondBox_left}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlONr-cE2sxe-uUrmffzc2ysBgGauhILz9g&usqp=CAU" alt=""/>
                </div>
                <div className={classes.secondBox_right}>
                    <h2>Spring Cleaing</h2>
                    <p>With the help of a set of cleaning 
                        procedures, an apartment or cottage can transform and 
                        return to its original state! But for this you need to 
                        have a number of knowledge and skills and use the right 
                        harvesting equipment and spend a 
                        lot of time and effort to clean the room from heavy pollution.</p>
                </div>
            </div>
            <SecondWave/>
        </div>
        
    )
}
export default SupportiveCleaingTextBox