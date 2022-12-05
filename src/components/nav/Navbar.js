import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
function Navbar() {
  return (
   <nav className={classes.navbar}>
     <div className={classes.s}>
        <div className={classes.logo}> <Link  className={classes.li} to='/'> T.B.M</Link></div>
     </div>
    
   </nav>
  )
}

export default Navbar