import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import classes from './Intro.module.css'


function Intro() {
  return (
<React.Fragment>
    <Navbar className={classes.nav}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/a.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            ABDUL ALEEM
          </Navbar.Brand> 
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className={classes.new}>
            <a href='#sec1'>ABOUT</a>
          </Navbar.Text>
          <Navbar.Text className={classes.new}>
           <a href='#sec2'>SKILLS</a> 
          </Navbar.Text>
          <Navbar.Text className={classes.new}>
           <a href='#sec3'>PROJECTS</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={classes.div1}>
        <h1 className={classes.h11}>
        Hello!
        </h1>
       <h2 className={classes.h21}> I'm Abdul, a</h2>
       <h2 className={classes.h21}>Creative Web Developer</h2>
       <h2 className={classes.h21}>based in Chennai.</h2>
      </div>
      </React.Fragment>

       )
}

export default Intro