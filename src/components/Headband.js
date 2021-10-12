import picture from '../assets/IMG.jpg';
import '../styles/Headband.css';

function Sweatband(){
    const headline = 'Chez vous, partout et ailleurs'
    return (
        <div className='body'>
            <div className='mask'>
                <img src={picture} alt='img' className='picture' />
                <h3 className='headline'>{headline}</h3>
            </div>
        </div>
        
    );
} 

export default Sweatband