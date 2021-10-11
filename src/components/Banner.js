import LOGO from '../assets/LOGO_Banner.png';
import '../styles/Banner.css';

function Banner(){
    
    const NavHome = 'Accueil';
    const NavNews = 'A propos'
    return (
        <div>
            <div>
                <img src={LOGO} alt='kasa' className='logo' />
            </div>
            <div>
                <a href className="nav home"><span>{NavNews}</span></a>
                <a href className="nav news"><span>{NavHome}</span></a>
            </div>
        </div>
        
    );
} 

export default Banner