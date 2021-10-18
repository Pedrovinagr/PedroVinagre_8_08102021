import '../styles/F_logement.css';

function Title(){
    const titles = 'Cozy loft on the Canal Saint-Martin'
    const locale = 'Paris, Île-de-France'
    const owner = 'Alexandre Dumas'
    return (
        <div className='file_inf'>
            <div className='item_inf'>
                <p className='title'>{titles}</p>
                <p className='locale'>{locale}</p>
            </div>
            
            <div className='name_file'>
                <p className='name'>{owner}</p>
                <p className='icon'>{}</p>
            </div>
        </div>
    );
} 

export default Title