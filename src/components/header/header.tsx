'use client';

import { useEffect, useRef, useState } from 'react';
import './header.scss';

interface HeaderProps {
    currentSection: number;
    sectionList: any;
}


export default function Header({ currentSection, sectionList }: HeaderProps) {
    const [displayBurger, setDisplayBurger] = useState(false);
    const linkParent = useRef<HTMLDivElement>(null);

    function scrollIntoNav(section: number) {
        sectionList.current?.children[section].scrollIntoView({ behavior: 'smooth' });
    }

    function clickedBurgerButton() {
        setDisplayBurger(!displayBurger);
    }

    useEffect(() => {
        if (linkParent.current) {
            var curSec = Array.from(linkParent.current.children) as Array<any>;
            curSec.forEach((elem: any) => elem.style.color = 'black');

            curSec[currentSection].style.color = 'red';
        }
    }, [currentSection])

    return (
        <div className='navbar'>
            <div className='nav-header'>
                <img src='/assets/burger.svg' onClick={clickedBurgerButton}></img>
            </div>
            <div className={`nav-container smallscreen ${displayBurger ? 'active' : 'nonactive'}`} >
                <span onClick={() => scrollIntoNav(1)}> présentation </span>

                <span onClick={() => scrollIntoNav(2)}> compétences </span>

                <span onClick={() => scrollIntoNav(3)}> portfolio </span>
                <span onClick={() => scrollIntoNav(4)}> à propos </span>
                <span onClick={() => scrollIntoNav(5)}> contact </span>
            </div>
            <div className='nav-container bigscreen' ref={linkParent}>
                <span onClick={() => scrollIntoNav(1)}> présentation </span>

                <span onClick={() => scrollIntoNav(2)}> compétences </span>

                <span onClick={() => scrollIntoNav(3)}> portfolio </span>
                <span onClick={() => scrollIntoNav(4)}> à propos </span>
                <span onClick={() => scrollIntoNav(5)}> contact </span>
            </div>

        </div>
    )


}