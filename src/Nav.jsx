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
            <li><Link to="/">Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/reservations'>Reservations</Link></li>
            <li><Link to='/orderOnline'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/about' element = {<About />}></Route>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/reservations' element = {<ReservationsPage />}></Route>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/' element = {<Home />}></Route>
        </Routes>
      </>
    )
}

export default Nav;