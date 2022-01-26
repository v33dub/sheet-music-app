import React from 'react';
import sharp from '../images/sharp.png';
import flat from '../images/flat.png';

export default class Note extends React.Component {
    render() {
        return (
            <div className="note">
                {this.props.note.includes("#") ? <img src={sharp} alt="Sharp" className="sharp" /> : ""}
                {this.props.note.includes("b") ? <img src={flat} alt="Flat" className="flat" /> : ""}
            </div>
        );
    }
}