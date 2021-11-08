import React from "react";

import '../styles/Carousel.css';

import ChevronRight from '../assets/ChevronRight.png';
import ChrevronLeft from '../assets/ChevronLeft.png';
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { picturesIndex: 0 };
    }

    render() {
        const nextSlide = () => {
            if(this.state.picturesIndex < this.props.picture.length -1) {
                this.setState({picturesIndex: this.state.picturesIndex +1});
            }
            else {
                this.setState({picturesIndex: 0});
            }
        }

        const prevSlide = () => {
            if (this.state.picturesIndex > 0) {
                this.setState({picturesIndex: this.state.picturesIndex-1});
            }
            else {
                this.setState({picturesIndex: this.props.picture.length -1});
            }
        }
        
        return(
            <>
            <section className='carousel'>
                <img src={ChrevronLeft} alt='left-Arrow' className='Chrevron left' onClick={prevSlide} />
                <img src={ChevronRight} alt='right-Arrow' className='Chrevron right' onClick={nextSlide} />
                <img src={this.props.picture[this.state.picturesIndex]} alt='kasa' className='house_image' />
                <p className= 'pages'>{this.state.picturesIndex +1}/{this.props.picture.length}</p>
            </section>
            </>
        )
    }
}

export default Carousel;