import '../styles/F_logement.css';

function Tag(){
    const title1 = 'Cozy'
    const title2 = 'Canal'
    const title3 = 'Paris 10'

    return (
        <div className='tags'>
            <div className='tag'>
                <p>{title1}</p>
            </div>
            
            <div className='tag'>
                <p>{title2}</p>
            </div>

            <div className='tag'>
                <p>{title3}</p>
            </div>
        </div>
    );
} 

export default Tag