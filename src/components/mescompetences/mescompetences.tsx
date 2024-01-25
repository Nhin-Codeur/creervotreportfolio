import './mescompetences.scss';


export default function MesCompetences() {
    return (
        <div className='mescompetences'>
            <div className='back'>
                <img src='/assets/back.png'></img>
                <span>  CSS /Javascript / React</span>
            </div>
            <div className='front'>
                <img src='/assets/front.png'></img>
                <span> HTML / Node.js / JAVA / MySQL / MongoDB / Symfony / Express.js /Création et utilisation API </span>
            </div>
            <div className='outils'>
                <img src='/assets/outil.svg'></img>
                <span> Visual Studio / ChatGPT / Google Cloudnpm / yarn / composer / Git / GitHub /Postman </span>
            </div>
        </div>
    )

}