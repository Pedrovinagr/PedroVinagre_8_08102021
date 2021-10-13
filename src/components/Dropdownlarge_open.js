import '../styles/Dropdown.css';
import vectorUp from '../assets/Vector_up.png';

function DropdownOpen(){
    const Reliability = 'Fiabilité'
    const ContantReliability = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes' 
    const Respect = 'Respect'
    const ContentRespect = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    const Serve = 'Service'
    const ContentServe = 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
    const Security = 'Sécurité'
    const ContentSecurity = 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    
    return (
        <div>
            <div>
                <div className='dropdowns'>
                    <p className='title_dropdown'>{Reliability}</p> 
                    <img src={vectorUp} alt='kasa' className='vector_down' />
                </div>
                <div className='content'>
                    <p className='text_content'>{ContantReliability}</p> 
                </div>
            </div>

            <div className='dropdowns'>
                <p className='title_dropdown'>{Respect}</p> 
                <img src={vectorUp} alt='kasa' className='vector_down' />
            </div>
            <div className='content'>
                <p className='text_content'>{ContentRespect}</p> 
            </div>
            

            <div className='dropdowns'>
                <p className='title_dropdown'>{Serve}</p> 
                <img src={vectorUp} alt='kasa' className='vector_down' />
            </div>
            <div className='content'>
                <p className='text_content'>{ContentServe}</p> 
            </div>
            

            <div className='dropdowns'>
                <p className='title_dropdown'>{Security}</p> 
                <img src={vectorUp} alt='kasa' className='vector_down' />
            </div>
            <div className='content'>
                <p className='text_content'>{ContentSecurity}</p> 
            </div>
            
        </div>
    );
} 

export default DropdownOpen