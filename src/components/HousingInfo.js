import React from "react";
import '../styles/Logement.css';

import Rating from'./Rating';

class HousingInfo extends React.Component {

    render() {
        const ListTags = this.props.datas.tags.map((tags) => <li className='tag'>{tags}</li> )
        const RatingStar = this.props.datas.rating

        return (
            <div className='info'>
                <div className='file_inf'>
                    <p className='title'>{this.props.datas.title}</p>
                    <p className="locale">{this.props.datas.location}</p>
                </div>
                <div className='name_file'>
                    <p className='name'>{this.props.datas.host.name}</p>
                    <img src= {this.props.datas.host.picture} alt="identity" className='Identity'/>
                </div>
                <ul className="tags"> {ListTags} </ul>
                <Rating star={RatingStar}/>
            </div>
        );
    }
}

export default HousingInfo;