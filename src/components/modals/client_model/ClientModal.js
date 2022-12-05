import React from 'react'
import classes from './ClientModal.module.css'
function ClientModal(props) {
  return (
    <div className='modal' onClick={props.onClick}>clientModal</div>
  )
}

export default ClientModal