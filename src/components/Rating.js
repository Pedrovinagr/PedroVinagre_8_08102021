import React from "react";
import "../styles/Logement.css";

import OrangeStar from "../assets/OrangeStar.png";
import GreyStar from "../assets/GreyStar.png";


class Rating extends React.Component {

    constructor(props) {
        super(props);
        this.state = {Rating: this.props.star}
    }
    render() {
        const range = [1, 2, 3, 4, 5]
        const NumberStar =
            this.state.Rating === range ? 
            (<img src={GreyStar} alt='sun-icon' />) : (<img src={OrangeStar} alt='water-icon' />)

        return(
            <div className='star'>
            {range.map((rangeElem) =>
				this.state.Rating >= rangeElem ? (<span key={rangeElem.toString()}>{NumberStar}</span>
				) : null
			)}
            </div>
        )
    }
}

export default Rating;

// ({ scaleValue, careType }) {
// 	

// 	return (
// 		<div>
// 			
// 		</div>
// 	)
// }