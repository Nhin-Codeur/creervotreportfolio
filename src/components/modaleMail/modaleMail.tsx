'use client';

import { useEffect, useState } from 'react';
import './modaleMail.scss';

function SendEmail(emailUser: string, message: string, setIsMailLoading: Function, closeModale: Function) {
    const body = { emailUser: emailUser, corps: message }
    fetch(process.env.NEXT_PUBLIC_HOST + "/api/sendemail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    }).then(() => {
        setIsMailLoading(false);
        closeModale();
    })
    setIsMailLoading(true);
}

interface ModaleProps {
    closeModale: () => void;

}

export default function ModaleMail({ closeModale }: ModaleProps) {



    const [isInputMailValid, setIsInputMailValid] = useState(true);
    const [emailUser, setEmailUser] = useState('');
    const [message, setMessage] = useState('');
    const [isMailLoading, setIsMailLoading] = useState(false);

    useEffect(() => {
        var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!emailUser.match(pattern)) {
            setIsInputMailValid(false);
        } else {
            setIsInputMailValid(true);
        }

    }, [emailUser])

    return (
        <>
            <div className='modaleContainer'>
                <div className='modale'>
                    <div className='top-modale'>
                        <span> Envoyez-moi un mail </span>
                        <div className='close-modale-wrap' onClick={() => closeModale()}>
                            <img src='/assets/cross.svg' />
                        </div>
                    </div>
                    <input
                        className='email-user'
                        value={emailUser} // ...force la valeur du champ de saisie à la valeur de la variable d'état...
                        onChange={e => setEmailUser(e.target.value)} // // ...et met à jour la variable d'état à chaque frappe !
                        placeholder='Votre email...'
                    />
                    <span style={{ color: 'red', display: isInputMailValid ? 'none' : 'block' }}> email invalide </span>
                    <textarea
                        className='mail-content'
                        value={message} // ...force la valeur du champ de saisie à la valeur de la variable d'état...
                        onChange={e => setMessage(e.target.value)} // // ...et met à jour la variable d'état à chaque frappe !
                        placeholder='Votre message...'
                    />
                    <button
                        onClick={() => SendEmail(emailUser, message, setIsMailLoading, closeModale)}
                        disabled={isMailLoading || !isInputMailValid ? true : false}
                    > Envoyer</button>
                </div>
            </div>
        </>
    )
}