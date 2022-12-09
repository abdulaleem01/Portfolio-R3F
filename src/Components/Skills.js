import React from 'react'
import classes from './Skills.module.css'
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { GiWireframeGlobe} from 'react-icons/gi';
import { GiWoodFrame} from 'react-icons/gi';



function Skills() {
  return (
    <div className={classes.div1}>
        <h1 className={classes.h11}>Skills</h1>
        <h3 className={classes.h31}>Programming Languages</h3>
         <div className={`${classes.div2} ${classes.div21}`}>
            <p className={`${classes.p1} ${classes.p11}`}><BsFillLightningChargeFill/>Python</p>
            <p className={`${classes.p1} ${classes.p11}`}><BsFillLightningChargeFill/>Javascript</p>
            <p className={`${classes.p1} ${classes.p11}`}><BsFillLightningChargeFill/>Perl</p>
        </div>
        <h3 className={classes.h31}>My Stack</h3>
        <div className={classes.div2}>
            <p className={classes.p1}><GiWireframeGlobe/> FrontEnd - React</p>
            <p className={classes.p1}><GiWireframeGlobe/> BackEnd  - Django</p>
        </div>
        <h3 className={classes.h31}>FrameWorks and Libraries</h3>
        <div className={classes.div2}>
            <p className={classes.p1}><GiWoodFrame/> Threejs</p>
            <p className={classes.p1}><GiWoodFrame/> Numpy, Pandas, Matplotlib</p>
            <p className={classes.p1}><GiWoodFrame/> Django-Rest-FrameWork</p>
            <p className={classes.p1}><GiWoodFrame/> Tkinter</p>


        </div>


    </div>
  )
}

export default Skills