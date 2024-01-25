'use client';

import { useState } from 'react';
import './header.scss';


export default function Header() {
    const [displayBurger, setDisplayBurger] = useState(false);
    function clickedBurgerButton() {
        setDisplayBurger(!displayBurger);
    }
    return (
        <div className='navbar'>
            <div className='nav-header'>
                <img src='/assets/burger.svg' onClick={clickedBurgerButton}></img>
            </div>
            <div className={`nav-container smallscreen ${displayBurger ? 'active' : 'nonactive'}`}>
                <a href=''> présentation </a>

                <a href=''> compétences </a>

                <a href=''> portfolio </a>
                <a href=''> à propos </a>
                <a href=''> contact </a>
            </div>
            <div className='nav-container bigscreen'>
                <a href=''> présentation </a>

                <a href=''> compétences </a>

                <a href=''> portfolio </a>
                <a href=''> à propos </a>
                <a href=''> contact </a>
            </div>

        </div>
    )


}