import React from 'react'
import Logo from './icons_assets/Logo.svg';
import {Link} from 'react-router-dom';


function Nav(){
    return (
      <>
        <nav>
          <img src={Logo} alt='logo'/>
          <ul>
            <li><Link to="/Little-Lemon-Restaurent-Website">Home</Link></li>
            <li><Link to='/Little-Lemon-Restaurent-Website/about'>About</Link></li>
            <li><Link to='/Little-Lemon-Restaurent-Website/menu'>Menu</Link></li>
            <li><Link to='/Little-Lemon-Restaurent-Website/reservations'>Reservations</Link></li>
            <li><Link to='/Little-Lemon-Restaurent-Website/orderOnline'>Order Online</Link></li>
            <li><Link to='/Little-Lemon-Restaurent-Website/login'>Login</Link></li>
          </ul>
        </nav>
      </>
    )
}

export default Nav;