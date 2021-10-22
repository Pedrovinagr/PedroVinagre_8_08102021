import logements from '../Datas/logements.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/F_logement.css';

function Carrousel(){
    const data = logements;
    console.log(logements)
    const dataPicture = data.find(pictures => pictures.id === "c67ab8a7")
    // const dataCarousel = dataPicture.map(dataCarousel => (dataCarousel.pictures))
    console.log(dataPicture)
    // console.log(dataCarousel)
    return (
    <Carousel>
        {dataPicture.map((picture) =>
            <div key={picture.id}>
                <img src={picture.pictures} alt="" />
            </div>
        )}
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