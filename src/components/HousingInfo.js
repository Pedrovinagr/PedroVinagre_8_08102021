import React from "react";
import '../styles/Logement.css'

class HousingInfo extends React.Component {

    render() {
        const ListTags = this.props.datas.tags.map((tags) => <li>{tags}</li> )
        return (
            <div>
                <p>{this.props.datas.title}</p>
                <p>{this.props.datas.location}</p>
                <p>{this.props.datas.host.name}</p>
                <img src= {this.props.datas.host.picture} alt="identity"/>
                <ul> {ListTags} </ul>

            </div>
        );
    }
}

export default HousingInfo;