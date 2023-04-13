import React from "react";
import imga from '../components/icons_assets/Mario and Adrian A.jpg';
import imgb from '../components/icons_assets/Mario and Adrian b.jpg';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function About(){
    return(
        <>
        <Nav />
        <section className="article">
            <section className="article_data">
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt consectetur doloremque soluta ipsam adipisci architecto, quis ipsum veniam atque corrupti? Esse, vitae sed! Quas facilis, aspernatur vel enim possimus eos nemo soluta numquam ratione animi excepturi, error ea? Cum tempora cumque aliquam voluptas quod veritatis explicabo inventore incidunt voluptatum quas.</p>
            </section>
            <section className="article_img">
                <img src= {imga} alt="adrian" />
                <img src= {imgb} alt="mario" />
            </section>
        </section>
        <Footer />
        </>
    );
}

export default About;