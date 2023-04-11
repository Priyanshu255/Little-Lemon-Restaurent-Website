import React from "react";
import {Link} from 'react-router-dom';
import mainfood from "./icons_assets/restauranfood.jpg";

function Main(){
    return(
        <main>
            <aside>
                <h1>Little lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to='/reservations'><button>Reserve a Table</button></Link>
            </aside>
            <aside>
                <img src= {mainfood} alt="logo" />
            </aside>
        </main>
    );
}

export default Main;