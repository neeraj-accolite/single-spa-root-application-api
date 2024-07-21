import React from 'react';
import './styles.css';

function Footer() {
  return (
    <div id="footer">
        <label className='copyright'>© Nutrien Limited</label>
        <div>
        <nav>
          <ul className='menu'>
            <li><a  href="/terms" className="menu">Terms Of Conditions</a></li>
            <li><a href="/about" className="menu">About Us</a></li>
            <li><a href="/privacy" className="menu">Privacy Policy</a></li>
          </ul>
        </nav>
        </div>
      
    </div>
  );
}
export default Footer;