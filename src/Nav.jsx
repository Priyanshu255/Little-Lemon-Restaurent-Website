import React from 'react'
import Logo from './components/icons_assets/Logo.svg';
import {Route, Routes, Link} from 'react-router-dom';
import ReservationsPage from './routes/ReservationPage';
import About from './routes/About';
import Home from './routes/Home';


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
        <Routes>
          <Route path='/Little-Lemon-Restaurent-Website' element = {<Home />}></Route>
          <Route path='/Little-Lemon-Restaurent-Website/about' element = {<About />}></Route>
          <Route path='/Little-Lemon-Restaurent-Website' element = {<Home />}></Route>
          <Route path='/Little-Lemon-Restaurent-Website/reservations' element = {<ReservationsPage />}></Route>
          <Route path='/Little-Lemon-Restaurent-Website' element = {<Home />}></Route>
          <Route path='/Little-Lemon-Restaurent-Website' element = {<Home />}></Route>
        </Routes>
      </>
    )
}

export default Nav;