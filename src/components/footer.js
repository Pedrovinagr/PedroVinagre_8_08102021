import LOGO from '../assets/LOGO_Footer.png';
import '../styles/Footer.css';

function Footer(){
    
    const Copyright = '© 2020 Kasa. All rights reserved';
    return (
        <div className='container_footer'>
            <img src={LOGO} alt='kasa' className='logo_footer'/>
            <p className='copyright'>{Copyright}</p>
        </div>
        
    );
} 

export default Footer