// import React from 'react';
// import logements from '../Data/logements.json'
// import '../styles/Cards.css';

// class Cards extends React.Component {

//     render(){

//         const data = logements;
//         const listItems = data.map(({id, title, cover}) =>
//             <div className='card'>
//                 <li key={id.toString()} className='img'> 
//                     <img className='lmj-plant-item-cover' src={cover} alt={`${id} cover`} />
//                 </li>
//                 <li className='title'>
//                     {title}
//                 </li>
//             </div>
//             );

//         return(
//             <div>
//                 <ul className='log-list'> {listItems}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default Cards

import React from 'react';
import '../styles/Cards.css';

class Cards extends React.Component {

    constructor(props){
        super(props)
        this.state = {card: this.props.card}
    }

    render(){
        return (
            <div className='card'>
                <ul>
                    <li key={this.state.card.id.toString()} className='img'> 
                        <img className='log_cover' src={this.state.card.cover} alt={`${this.state.card.id} cover`} />
                    </li>
                    <li className='title'>
                        {this.state.card.title}
                    </li>
                </ul>
		    </div> 
        );
    }
}

export default Cards 