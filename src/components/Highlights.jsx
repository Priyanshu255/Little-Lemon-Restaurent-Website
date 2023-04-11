import React from "react";
import greeksalad from './icons_assets/greek salad.jpg';
import bruchetta from './icons_assets/bruchetta.svg';
import lemonDessert from './icons_assets/lemon dessert.jpg';

function Highlights(){
    return(
        <div className="highlights">
            <aside className="head">
                <h1 style={{fontSize : '30px'}}>This weeks specials!</h1>
                <button>Online Menu</button>
            </aside>
            <aside>
                <article>
                    <img src= {greeksalad} alt="dish1" />
                    <div className="dishdata">
                        <div>
                            <h4>Greek Salad</h4>
                            <h4>$12.99</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iure. Perspiciatis, nulla aperiam assumenda quod aspernatur possimus cum quos, at expedita corporis quo numquam rerum!</p>
                        <p>Order a delivary</p>
                    </div>
                </article>
                <article>
                    <img src= {bruchetta} alt="dish2" />
                        <div className="dishdata">
                        <div>
                            <h4>Bruchetta</h4>
                            <h4>$5.99</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni enim, autem hic quo a distinctio mollitia beatae inventore ipsam, doloremque voluptates eum dolores nostrum?</p>
                        <p>Order a delivary</p>
                    </div>
                </article>
                <article>
                    <img src= {lemonDessert} alt="dish3" />
                    <div className="dishdata">
                        <div>
                            <h4>Lemon Dessert</h4>
                            <h4>$5.00</h4>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe provident odio aliquam exercitationem, illum cumque nisi dolor? Obcaecati recusandae nobis deleniti quisquam, sed mollitia</p>
                        <p>Order a delivary</p>
                        </div>
                </article>
            </aside>
        </div>
    );
}

export default Highlights;