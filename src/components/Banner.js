import LOGO from '../assets/LOGO.png';
import '../styles/Banner.css';

function Banner(){
    const title = 'KASA'
    return (
        <div>
            <img src={LOGO} alt='kasa' className='logo' />
            <h1>{title}</h1>
        </div>
    );
} 

export default Banner