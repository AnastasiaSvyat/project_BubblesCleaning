import React from 'react'
import SecondWave from '../../../../Assets/SecondWave/Secondwave'

import classes from '../../../../Styles/home.module.css'




function HomeSecondBox(){
    return(
        <div className={classes.containerSecond}>
            <div className={classes.secondBox_left}>
                <img src="http://carpetserv.ancorathemes.com/wp-content/uploads/2017/02/Welcome.png" alt=""/>
            </div>
            <div className={classes.secondBox_right}>
                <h2>Professionl Carpet <br/> Cleaning Services</h2>
                <p>Regular vacuuming and stain-remaval <br/> products can help,
                but they simply can`t <br/> match the cleaning. CarpetServ can help 
                remove <br/> the evidence of everyday living</p>
            </div>
           <SecondWave/>
           
           
            
        </div>
    )
}
export default HomeSecondBox