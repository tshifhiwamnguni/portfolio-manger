import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Welcome.module.css'
function Welcome() {
  return (
    <section className={classes.main}>
      <div className={classes.cen}>
        Welcome, Tshifhiwa
        
        </div> 
        
        <p>"any fool can write code that a computer can understand. Good programmers write code that humans can understand.” <br/> Martin Fowler
        <br/>
        <span className={classes.start}>Get started</span>
            </p>
     
        <div className={classes.s}>
        <div className={classes.list}>
           
              <Link className={classes.li} to='about'>about</Link>
              <Link className={classes.li} to='experience'> experience</Link>
              <Link className={classes.li} to='services'>services</Link>
              <Link className={classes.li} to='portfolio'>portfolio</Link>
        </div>
     </div> 
     </section>
    
  )
}

export default Welcome