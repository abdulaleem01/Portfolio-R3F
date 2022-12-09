import React from 'react'
import classes from './Project.module.css'
import { AiFillGithub} from 'react-icons/ai';


function Project() {
  return (
    <div className={classes.div1}>
        <h1 className={classes.h11}>Projects</h1>
        <div className={classes.div2}>
        <h3 className={classes.h31}>1.Love Game</h3>
        <h3 className={classes.h32}>This is a simple love meter and flames game gui made 
        using python's tkinter library. <a target='_blank' href='https://github.com/abdulaleem01/ALoveGame'><AiFillGithub color='lightblue' size={40}></AiFillGithub></a></h3>
        </div>


        <div className={classes.div2}>
        <h3 className={classes.h31}>2.DoIt V1.2</h3>
        <h3 className={classes.h32}>This project is an testcase writing application build using python's Django framework and React which incorporates CRUD functions.
        <a target='_blank' href='https://github.com/abdulaleem01/DoIt-V1.2'><AiFillGithub color='lightblue' size={40}></AiFillGithub></a></h3>
        </div>

        <div className={classes.div2}>
        <h3 className={classes.h31}>3.Portfolio Site 1</h3>
        <h3 className={classes.h32}>A portfolio site built using Django framework
        <a target='_blank' href='https://github.com/abdulaleem01/mywebsite'><AiFillGithub color='lightblue' size={40}></AiFillGithub></a></h3>
        </div>

        <div className={classes.div2}>
        <h3 className={classes.h31}>4.Portfolio Site 2</h3>
        <h3 className={classes.h32}>This is the current site you are viewing, built using Threejs and React three fiber 
        <a target='_blank' href='https://github.com/abdulaleem01/Portfolio-R3F'><AiFillGithub color='lightblue' size={40}></AiFillGithub></a></h3>
        </div>

        <div className={classes.div2}>
        <h3 className={classes.h31}>5.Blogging site</h3>
        <h3 className={classes.h32}>This site is a simple blogging site built using django's crud opertions.
        <a target='_blank' href='https://github.com/abdulaleem01/django-projec1'><AiFillGithub color='lightblue' size={40}></AiFillGithub></a></h3>
        </div>
    
    </div>
  )
}

export default Project
