import React from "react";
import '../styles/Carousel.css'
// import React, {useState} from "react";
import ChevronRight from '../assets/ChevronRight.png'
import ChrevronLeft from '../assets/ChevronLeft.png'
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            picturesIndex: 0,
            picturesArray: this.props.picture,
            pictures: this.props.picture[0]};
        }
    render() {
        const nextSlide = () => {
            if(this.state.picturesIndex < this.state.picturesArray.length) {
                this.setState({picturesIndex : picturesIndex + 1})
            }
            else {
                this.setState({picturesIndex: 0})
            }

            this.setState({ pictures: this.state.picturesArray[this.state.picturesIndex]});
        }

        const prevSlide = () => {
            if (this.state.picturesIndex > 0) {
                this.setState({picturesIndex : picturesIndex -1});
                
            }
        }
        
        return(
            <section className='carousel'>
                <img src={ChrevronLeft} alt='left-Arrow' className='Chrevron left' />
                <img src={ChevronRight} alt='right-Arrow' className='Chrevron right' onClick={nextSlide} />
                {this.props.picture.map((pictures, index) => <img key={index} src={pictures} alt='kasa' className='house_image' />)}
            </section>
        )
    }
}

export default Carousel;



// this.state = {current: 0}
//         this.state = {index: 0}
//     }

//     render() {
//         const length = this.props.picture.length;
//         const nextSlide = () => {
//             this.setState(this.state.current === length -1 ? 0 : this.state.current +1)
//         }

//         console.log(this.state.current)

//         if(!Array.isArray(this.props.picture) || this.props.picture.length <= 0) {
//             return null;
//         }