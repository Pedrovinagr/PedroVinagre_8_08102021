import '../styles/Dropdown.css';
import vectorDown from '../assets/Vector_down.png';

function DropdownClose(){
    const Reliability = 'Fiabilité'
    const Respect = 'Respect'
    const Serve = 'Service'
    const Security = 'Sécurité'
    

    return (
        <div>
            <div className='dropdowns'>
                <p className='title_dropdown'>{Reliability}</p> 
                <img src={vectorDown} alt='kasa' className='vector_down' />
            </div>

            <div className='dropdowns'>
                <p className='title_dropdown'>{Respect}</p> 
                <img src={vectorDown} alt='kasa' className='vector_down' />
            </div>

            <div className='dropdowns'>
                <p className='title_dropdown'>{Serve}</p> 
                <img src={vectorDown} alt='kasa' className='vector_down' />
            </div>

            <div className='dropdowns'>
                <p className='title_dropdown'>{Security}</p> 
                <img src={vectorDown} alt='kasa' className='vector_down' />
            </div>
        </div>
    );
} 

export default DropdownClose