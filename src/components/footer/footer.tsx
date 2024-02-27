'use client';

import { useState } from 'react';
import ModaleMail from '../modaleMail/modaleMail';
import './footer.scss';




export default function Footer() {

    const [isModaleOpen, setIsModaleOpen] = useState(false);




    return (
        <>
            <div className='footer'>
                <img src='/assets/mail.svg' onClick={() => setIsModaleOpen(true)} />
                <a className='github' href='https://github.com/Nhin-Codeur'></a>
                <a className='linkedin' href='https://www.linkedin.com/in/elliot-clemenceau-66981b254/'></a>
            </div>
            <div className='modale-footer' style={{ visibility: isModaleOpen ? 'visible' : 'hidden', opacity: isModaleOpen ? '100' : '0' }}>
                <ModaleMail closeModale={() => setIsModaleOpen(false)} ></ModaleMail>
            </div>
        </>

    )

}

