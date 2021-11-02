import React from "react";
import '../styles/Carousel.css'
// import React, {useState} from "react";
import ChevronRight from '../assets/ChevronRight.png'
import ChrevronLeft from '../assets/ChevronLeft.png'
import { useState } from "react/cjs/react.development";
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {slides: this}
    }


    render() {
        const [current, setCurrent] = useState(0);
        const length = slides.length;

        const nextSlide = () => {
            setCurrent(current === length -1 ? 0 : current +1)
        }

        console.log(current)

        if(!Array.isArray(slides) || slides.length <= 0) {
            return null;
        }

        return(
            <section className='carousel'>
                <img src={ChrevronLeft} alt='left-Arrow' className='Chrevron left' />
                <img src={ChevronRight} alt='right-Arrow' className='Chrevron right' onClick={nextSlide}/>
                {this.props.picture.map((pictures) => <img src={pictures} alt='kasa' className='house_image' />)} 
                <p> {this.props.picture.description}</p>
            </section>
        )
    }
}

export default Carousel;



// this.state = { picturesIndex: 0};
        // this.state = {picturesArray: this.props.picture};
        // this.state = {pictures: this.props.picture[0]};
    // nextPictures = () => {
    //     if(this.state.picturesIndex < this.state.picturesArray.length) {
    //         this.setState({picturesIndex : this.state.picturesIndex + 1})
    //     }
    //     else {
    //         this.setState({picturesIndex : 0})
    //     }

    //     this.setState({ pictures: this.state.picturesArray[this.state.picturesIndex]});
    // }