import '../styles/F_logement.css';
import vectorDown from '../assets/Vector_down.png';

function DropdownClose(){
    const description = 'Description'
    const equipements = 'Équipements'

    return (
        <div>
            <div className='dropdowns'>
                <p className='title_dropdown'>{description}</p> 
                <img src={vectorDown} alt='kasa' className='vector_down' />
            </div>

            <div className='dropdowns'>
                <p className='title_dropdown'>{equipements}</p> 
                <img src={vectorDown} alt='kasa' className='vector_down' />
            </div>
        </div>
    );
} 

export default DropdownClose