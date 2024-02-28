import './apropos.scss';

export default function Apropos() {
    return (
        <>
            <div className='apropos-container'>
                <div className='image-container'>
                    <img src='/assets/about.svg'></img>
                </div>
                <div className='text-container'>

                    <h2> A propos de moi </h2>
                    <span> Diplômé de la formation développeur web OpenClassrooms RNCP+5 équivalent bac +2 en alternance, <br /> Je suis passionné par le développement front-end et le web design, vous cherchez un développeur passionné et polyvalent pour votre prochain projet ? N'hésitez pas à me contacter pour discuter de vos besoins.</span>
                </div>
                <div className='right'> </div>
            </div>
        </>
    )
}