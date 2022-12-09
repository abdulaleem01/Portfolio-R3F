import React from 'react'
import classes from './About.module.css'


function About() {
  return (
    <div className={classes.div1}>
        <h1 className={classes.h11}>
            About Me
        </h1>
        <div className={classes.div2}>
            <p>
            Hi, I'm Abdul Aleem, a self-taught passionate creative web developer from India, 
            currently working on personal web projects. 
            I've been building stuff on the web since 2020, 
            I've made countless side projects and 
            I also posses magical powers of using react to build delightful user interfaces.
            </p>
            <p>
            I've enjoyed turning complex problems into simple, 
            beautiful and intuitive products using python and javascript. 
            When I'm not pushing pixels, 
            you'll find me capturing wildlife photography.
            </p>
            
        </div>
    </div>
  )
}

export default About