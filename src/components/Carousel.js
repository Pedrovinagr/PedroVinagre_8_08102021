import React from "react";

import '../styles/Carousel.css';

import ChevronRight from '../assets/ChevronRight.png';
import ChrevronLeft from '../assets/ChevronLeft.png';
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            picturesIndex: 1,
            picturesArray: this.props.picture,
            pictures: this.props.picture[0]};
        }

    render() {
        const nextSlide = () => {
            if(this.state.picturesIndex < this.state.picturesArray.length -1) {
                this.setState({picturesIndex: this.state.picturesIndex +1});
            }
            else {
                this.setState({picturesIndex: 0});
            }

            this.setState({ pictures: this.state.picturesArray[this.state.picturesIndex]});
        }

        const prevSlide = () => {
            if (this.state.picturesIndex > 0) {
                this.setState({picturesIndex: this.state.picturesIndex -1});
            }
            else {
                this.setState({picturesIndex: this.state.picturesArray.length});
            }

            this.setState({pictures: this.state.picturesArray[this.state.picturesIndex]});
        }
        
        return(
            <>
            <section className='carousel'>
                <img src={ChrevronLeft} alt='left-Arrow' className='Chrevron left' onClick={prevSlide} />
                <img src={ChevronRight} alt='right-Arrow' className='Chrevron right' onClick={nextSlide} />
                <img src={this.state.pictures} alt='kasa' className='house_image' />
                <p className= 'pages'>{this.state.picturesIndex.valueOf()}/{this.state.picturesArray.length}</p>
            </section>
            </>
        )
    }
}

export default Carousel;