import Projet from '../projet/projet';
import './portfolio.scss';


export default function Portfolio() {
    var missi = []
    return (
        <>
            <div>
                <div className='header'>
                    <h1> Portfolio </h1>
                </div>
                <div className='projets'>

                    {/* <Projet
                        titre="créer un site en HTML et CSS"
                        description="Créez la page d'accueil d'une agence de voyage avec HTML & CSS"
                        color='#A9CEF4'
                        missions={['Mettre en place un environnement de développement', 'Implémenter le code HTML', 'Mettre en place le responsive design']}
                        moyens={['HTML5/CSS']}
                        lien='https://github.com/Nhin-Codeur/Booki'
                        nomLien={'Booki'} /> */}
                    <Projet
                        titre='Créez une page web dynamique avec JavaScript'
                        description="coder le front-end d'un site à partir d'un back-end"
                        color='#36494E'
                        missions={['Créez la page de présentation', 'Coder la page de connexion', 'Ajouter une modale']}
                        moyens={['JavaScript', 'HTML/CSS']}
                        lien='https://github.com/Nhin-Codeur/sophieBluel'
                        nomLien={'SophieBluel'} />
                    <Projet
                        titre='Débugguez et optimisez un site de photographe'
                        description="produire un rapport d'optimisation présentant toutes vos actions et leur impact."
                        color='#0F7173'
                        missions={['faire une optimisation globale du site', 'rendre accessibile le site', 'corriger les bugs']}
                        moyens={['HTML/CSS', 'bootstrap, jQuery']}
                        lien='https://github.com/Nhin-Codeur/optimisezUnSitePhotographe'
                        nomLien={'OptimisezUnSitePhotographe'} />
                    <Projet
                        titre='Créez une application web'
                        description='Créez une application React complète'
                        color='#7EA0B7'
                        missions={["Créer le routeur et les différentes pages de l'application", 'Gérer la partie responsive de toutes les pages', "Gérer les changements d'états avec React"]}
                        moyens={['React, ReactRouter', 'scss']}
                        lien='nhin-codeur.github.io/creeruneapplicationwebavecreact/'
                        nomLien={'creeruneapplicationwebavecreact'} />
                    <Projet
                        titre="Développez le back-end d'un site"
                        description='Passez au Full Stack avec Node.js, Express et mongoDB'
                        color='#597081'
                        missions={["Créer un serveur express", 'Créer une API RESTful', "Géstion des livres et des authentifications sur le site"]}
                        moyens={['Node.js, NoSQL', 'Express']}
                        lien='nhin-codeur.github.io/creeruneapplicationwebavecreact/'
                        nomLien={'creeruneapplicationwebavecreact'} />

                </div >
            </div>
        </>

    )
}