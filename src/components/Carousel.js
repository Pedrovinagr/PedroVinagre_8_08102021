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
                this.setState({picturesIndex: this.state.picturesIndex + 1})
            }
            else {
                this.setState({picturesIndex: 0})
            }

            this.setState({ pictures: this.state.picturesArray[this.state.picturesIndex]});
        }

        const prevSlide = () => {
            if (this.state.picturesIndex > 0) {
                this.setState({picturesIndex: this.state.picturesIndex -1});
            }
            else {
                this.setState({picturesIndex: this.state.picturesArray.length -1});
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

// return(
//     <>
//     <section className='carousel'>
//         <img src={ChrevronLeft} alt='left-Arrow' className='Chrevron left' onClick={prevSlide} />
//         <img src={ChevronRight} alt='right-Arrow' className='Chrevron right' onClick={nextSlide} />
//         {this.props.picture.map((pictures, index) => <img key={index} src={pictures} alt='kasa' className='house_image' />)}
//         <p className= 'pages'>1/4</p>
//     </section>
//     </>
// )