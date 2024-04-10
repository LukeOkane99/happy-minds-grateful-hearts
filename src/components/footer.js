import React from 'react'
import './footer.css'
import footerLogo from '../images/footer-logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={footerLogo}></img>
        <ul className='footer-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Classes</li>
        </ul>
        <h3>Developed by Luke O'Kane</h3>
    </div>
  )
}

export default Footer