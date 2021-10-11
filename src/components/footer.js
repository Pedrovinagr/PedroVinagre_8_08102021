import LOGO from '../assets/LOGO_Footer.png';
import '../styles/footer.css';

function Footer(){
    
    const Copyright = '© 2020 Kasa. All rights reserved';
    return (
        <div className='container'>
            <div>
                <img src={LOGO} alt='kasa' className='logo_footer'/>
            </div>
            <div>
                <p className='copyright'>{Copyright}</p>
            </div>
        </div>
        
    );
} 

export default Footer