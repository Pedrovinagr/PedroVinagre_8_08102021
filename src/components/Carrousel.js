import logements from '../Datas/logements.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/F_logement.css';

function Carrousel(){
    const data = logements;

    return (
    <Carousel>
        {data.map(pictures => (
            <div key={pictures.id}>
                <img src={pictures.cover} alt="" />
            </div>
        ))}
    </Carousel>
  )
} 

export default Carrousel

  // const pages = '1/4'
    // return (
    //     <div className='carrousel'>
    //         <img src={log_background} alt='img' className='img_background' />
    //         <p className='pages'>{pages}</p>
    //     </div>
    // );