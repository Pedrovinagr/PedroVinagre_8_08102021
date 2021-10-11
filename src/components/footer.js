import LOGO from '../assets/LOGO_Footer.png';
import '../styles/Banner.css';

function Footer(){
    
    const Copyright = '© 2020 Kasa. All rights reserved';
    return (
        <div>
            <div>
                <img src={LOGO} alt='kasa' className='logo' />
            </div>
            <div>
                <p className="nav home">{Copyright}</p>
            </div>
        </div>
        
    );
} 

export default Footer