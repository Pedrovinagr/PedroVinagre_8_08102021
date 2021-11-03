import React from "react";
import "../styles/Logement.css";

import OrangeStar from "../assets/OrangeStar.png";
import GreyStar from "../assets/GreyStar.png";


class Star extends React.Component {

    render() {
        return(
            <>
            <h1>coucou</h1>
            <img src={OrangeStar} alt="star"/>
            <img src={GreyStar} alt="star"/>
            </>
        )
    }
}

export default Star;

// ({ scaleValue, careType }) {
// 	const range = [1, 2, 3]
// 	const scaleType =
// 		careType === 'light' ? (
// 			<img src={Sun} alt='sun-icon' />
// 		) : (
// 			<img src={Water} alt='water-icon' />
// 		)

// 	return (
// 		<div>
// 			{range.map((rangeElem) =>
// 				scaleValue >= rangeElem ? (
// 					<span key={rangeElem.toString()}>{scaleType}</span>
// 				) : null
// 			)}
// 		</div>
// 	)
// }