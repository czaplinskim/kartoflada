"use client"

import Burger from "./Burger.js";
import MobileMenu from "./MobileMenu.js";

import { useState, useRef } from 'react';


export default function Menu(){

    const [open, setOpen] = useState(false);

    const updateOpen = () => {
        setOpen(!open);
    };    

    return <div className="menu">
        <ul className="menu__item menu-list">
            <li className="menu-list__item"><a href='#about'>O IMPREZIE</a></li>
            <li className="menu-list__item"><a href='#glosuj'>GŁOSOWANIE</a></li>
            <li className="menu-list__item"><a href='#schedule'>PLAN IMPREZY</a></li>
        </ul>

        <div className="menu__item mobile-menu-list">
            {/* <img src="../burger.svg" className='mobile-menu-list__icon'></img>
             */}

            <Burger open={open} updateOpenFromChildren={updateOpen} setOpen={setOpen} />
            <MobileMenu open={open} setOpen={setOpen} />

        </div>

        <div className="menu__item menu-logo">
            <img className="menu-logo__img" src='./kartoflada.svg'></img>
        </div>

        <div className="menu__item menu-go-vote-button">
            {/* <Button size='menu' label="GŁOSUJ NA POTRAWĘ"></Button> */}
            {/* <button class="button button__menu button--dark-blue button--menu">GŁOSUJ NA POTRAWĘ</button> */}
            <a href='#glosuj' class="button button__menu button--dark-blue button--menu">GŁOSUJ NA POTRAWĘ</a>

        </div>
        
        </div>
}