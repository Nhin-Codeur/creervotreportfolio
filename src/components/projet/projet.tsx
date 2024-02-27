'use client'
import './projet.scss';
import { useInView } from "react-intersection-observer";
interface propsProjets {
    titre: string;
    description: string;
    color: string;
    missions: Array<string>;
    moyens: Array<string>;
    lien: string;
    nomLien: string;
}



export default function Projet({ titre, description, color, missions, moyens, lien, nomLien }: propsProjets) {



    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    return (
        <>
            <div ref={ref} className='projet ' style={{ backgroundColor: color, opacity: inView ? 100 : 0, transform: inView ? 'translateY(0)' : 'translateX(-20%)' }}>
                <h2> {titre}</h2>
                <span> {description} </span>
                <h3> Missions </h3>
                {
                    missions && missions.map(mission => <span>{mission}</span>)
                }
                <h3> Moyens utilisés :</h3>
                {
                    moyens && moyens.map(moyen => <span>{moyen}</span>)
                }
                <a href={lien}> {nomLien} </a>
            </div >
        </>
    )
}