import './projet.scss';

export default function Projet({ titre = '', description = '', color = 'grey', missions, moyens, lien, nomLien }) {

    return (
        <>
            <div className='projet ' style={{ backgroundColor: color }}>
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