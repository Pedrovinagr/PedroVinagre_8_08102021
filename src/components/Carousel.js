import React from "react";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { picturesIndex: 0};
        this.state = {picturesArray: this.props.picture};
        this.state = {pictures: this.props.picture[0]};
    }

    // nextPictures = () => {
    //     if(this.state.picturesIndex < this.state.picturesArray.length) {
    //         this.setState({picturesIndex : this.state.picturesIndex + 1})
    //     }
    //     else {
    //         this.setState({picturesIndex : 0})
    //     }

    //     this.setState({ pictures: this.state.picturesArray[this.state.picturesIndex]});
    // }

    render() {
        return(
            <div>
                <img src={this.props.picture} alt='kasa' className='logo' />
            </div>
        )
    }
}

export default Carousel;