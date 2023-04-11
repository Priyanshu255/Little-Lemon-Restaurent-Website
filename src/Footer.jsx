import React from "react";
import Logo from './components/icons_assets/Logo.svg';

function Footer(){
    return(
        <footer>
            <img src= {Logo} alt="logo"/>
            <div>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <ul>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;