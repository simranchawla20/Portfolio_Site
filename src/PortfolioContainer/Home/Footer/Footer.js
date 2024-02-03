import React from 'react'
import "./Footer.css"
import Diamond from '../../../assets/Home/shape-bg.png';

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            {/* <img src={require('../../../assets/Home/shape-bg.png').default} 
            alt="no internet connection"></img> */}
            <img src={Diamond} />
        </div>
    </div>
  )
}
