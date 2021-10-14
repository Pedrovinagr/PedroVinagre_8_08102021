import '../styles/F_logement.css';
import vectorStar from '../assets/Vector_star.png';

function Tag(){
    const title1 = 'Cozy'
    const title2 = 'Canal'
    const title3 = 'Paris 10'

    return (
        <div className='tag_cont'>
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

            <div className='star'>
                <img src={vectorStar} alt='kasa' className='orange_star' />
                <img src={vectorStar} alt='kasa' className='orange_star' />
                <img src={vectorStar} alt='kasa' className='orange_star' />
                <img src={vectorStar} alt='kasa' className='grey_star' />
                <img src={vectorStar} alt='kasa' className='grey_star' />
            </div>
        
        </div>
    );
} 

export default Tag