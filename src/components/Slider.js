import logements from '../Datas/logements.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/F_logement.css';

function slider(){
    const data = logements;
    // const dataPicture = data.find(pictures => pictures.id === "c67ab8a7")
    // const imgCarousel =;

    return (
    <Carousel>
        <div>
          {data.map(picture => (
            <div key={picture.id}>
              <img src={picture.cover} alt="" />
            </div>
          ))}
        </div>
    </Carousel>
  )
} 

export default slider

  // const pages = '1/4'
    // return (
    //     <div className='carrousel'>
    //         <img src={log_background} alt='img' className='img_background' />
    //         <p className='pages'>{pages}</p>
    //     </div>
    // );