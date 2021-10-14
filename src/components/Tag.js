import '../styles/F_logement.css';
import vectorOrangeStar from '../assets/Vector_orangestar.png';
import vectorGreyStar from '../assets/Vector_greystar.png';

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

            <div className='star'>
                <img src={vectorOrangeStar} alt='kasa' className='orange_star' />
                <img src={vectorOrangeStar} alt='kasa' className='orange_star' />
                <img src={vectorOrangeStar} alt='kasa' className='orange_star' />
                <img src={vectorGreyStar} alt='kasa' className='grey_star' />
                <img src={vectorGreyStar} alt='kasa' className='grey_star' />
            </div>
        </div>
    );
} 

export default Tag