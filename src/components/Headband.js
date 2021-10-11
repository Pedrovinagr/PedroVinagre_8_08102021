import picture from '../assets/IMG.jpg';
import '../styles/Headband.css';

function Sweatband(){
    const headline = 'Chez vous, partout et ailleurs'
    return (
        <div className='body'>
            <div className='mask'>
                <img src={picture} alt='img' className='picture' />
                <h1 className='headline'>{headline}</h1>
            </div>
            <p className='gallery'></p>
        </div>
        
    );
} 

export default Sweatband