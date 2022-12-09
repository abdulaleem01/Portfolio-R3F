import React from 'react'
import Intro from './Intro'
import About from './About'
import Skills from './Skills'
import Project from './Project'


//
import styles from './Header.module.css'



function Header() {
  return (
    <div className={styles.container}>
       <section>
        <Intro></Intro>
        </section>
        <section id='sec1'>
          <About></About>
        </section>
        <section id='sec2'>
          <Skills></Skills>
        </section>
        <section id='sec3'>
          <Project></Project>
        </section>
    
    </div>
  )
}

export default Header