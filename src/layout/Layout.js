import React from 'react'
import Navbar from '../components/nav/Navbar'
import Welcome from '../pages/Welcome/Welcome'
import classes from './Layout.module.css'
function Layout(props) {
  return (
    <div >
        <Navbar/> 
        <main className={classes.main}>
            {props.children}
       
        </main> 
    </div>
  )
}

export default Layout