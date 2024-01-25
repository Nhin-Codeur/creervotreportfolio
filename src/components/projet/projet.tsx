import './projet.scss';

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


    var test: Array<string>;

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