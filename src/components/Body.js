import background from '../assets/background_Body';
import '../styles/body.css';

function Body(){
    
    const NavHome = 'Accueil';
    const NavNews = 'A propos'
    return (
        <div>
            <div>
                <img src={background} alt='kasa' className='background' />
            </div>
            <div>
                <a href className="nav home"><span>{NavNews}</span></a>
                <a href className="nav news"><span>{NavHome}</span></a>
            </div>
        </div>
        
    );
} 

export default Body