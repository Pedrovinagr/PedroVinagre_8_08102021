import '../styles/Dropdown.css';
import vectorDown from '../assets/Vector_down.png';

function DropdownClose(){
    const titleDropdown = 'Titre' 
    return (
        <div className='dropdowns'>
            <p className='title_dropdown'>{titleDropdown}</p> 
            <img src={vectorDown} alt='kasa' className='vector_down' />
        </div>
    );
} 

export default DropdownClose