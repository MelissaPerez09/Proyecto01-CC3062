import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <img className="logo" alt="xd" src="../src/assets/logo.png"/>

      <div className='botones'>
        <button className='work'>WORK</button>
        <button className='how'>HOW</button>
        <button className='contact'>CONTACT</button>
      </div>
    </div>
  )
}

export default Header