import picture from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg';
import '../styles/Headband.css';

function SweatbandPropos(){
    const title_propos ='A propos'
    return (
        <div className='body'>
            <div className='mask'>
                <img src={picture} alt='img' className='picture_propos' />
                <h1 className='headline title_propos'>{title_propos}</h1>
            </div>
        </div>
    );
} 

export default SweatbandPropos