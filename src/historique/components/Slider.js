import logements from '../Datas/logements.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/F_logement.css';

function slider(){
    const datas = logements;
    const datasPicture = datas.find(pictures => pictures.id === "c67ab8a7")
    const data = [datasPicture]
    const picture = data.map(({pictures}) => pictures)
    const pictures = picture.forEach(element => { console.log(element) });
    console.log(pictures)

    // const imgCarousel =;

    return (
    <Carousel>
      {picture.map(contents => (
        <div key={contents.id}>
          <img src={contents} alt="" />
        </div>
      ))} 
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