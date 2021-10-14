import log_background from '../assets/Background.jpg';
import '../styles/F_logement.css';

function Carrousel(){
    const pages = '1/4'
    return (
        <div className='carrousel'>
            <img src={log_background} alt='img' className='img_background' />
            <p className='pages'>{pages}</p>
        </div>
    );
} 

export default Carrousel