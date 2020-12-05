import React from 'react'

import classes from '../../../../Styles/home.module.css'




function HomeSecondBox(){
    return(
        <div className={classes.containerSecond}>
            <div className={classes.secondBox_left}>
                <img src="http://carpetserv.ancorathemes.com/wp-content/uploads/2017/02/Welcome.png" alt=""/>
            </div>
            <div className={classes.secondBox_right}>
                <img src="https://assets.stickpng.com/thumbs/58aff1cf829958a978a4a6cb.png" alt=""/>
                <h2>Professionl Carpet <br/> Cleaning Services</h2>
                <p>Regular vacuuming and stain-remaval <br/> products can help,
                but they simply can`t <br/> match the cleaning. CarpetServ can help 
                remove <br/> the evidence of everyday living</p>
            </div>
            <div className = {classes.secondBox_top}>
                <img src="https://www.arredi.com.tr/site/o/72678/2016/10/bfe60e5b48fbdc91476ca7b5afc606ae.png?586434" alt=""/>
            </div>
            
        </div>
    )
}
export default HomeSecondBox