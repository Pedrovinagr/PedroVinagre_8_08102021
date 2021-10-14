import picture_log from '../assets/Background.jpg';
import '../styles/F_logement.css';

function Carrousel(){
    const num_page = '1/4'
    return (
        <div className='body_log'>
            <div className='mask_log'>
                <img src={picture_log} alt='img' className='picture_log' />
                <h1 className='headline_log'>{num_page}</h1>
            </div>
        </div>
        
    );
} 

export default Carrousel