import LOGO from '../assets/LOGO_Banner.png';
import '../styles/Banner.css';

function Banner(){
    
    const NavHome = 'Accueil';
    const NavNews = 'A propos'
    return (
        <div className='heater'>
            <div>
                <img src={LOGO} alt='kasa' className='logo' />
            </div>
            <div className='nav_container'>
                <a href className="nav home"><span>{NavHome}</span></a>
                <a href className="nav news"><span>{NavNews}</span></a>
            </div>
        </div>
        
    );
} 

export default Banner