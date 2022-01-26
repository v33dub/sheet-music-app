import React from 'react';
import sharp from '../images/sharp.png';
import flat from '../images/flat.png';

export default class NoteDisplay extends React.Component {
    render() {
        return (
            <div className="note">
                {this.props.note.isSharp ? <img src={sharp} alt="Sharp" className="sharp" /> : ""}
                {this.props.note.isFlat ? <img src={flat} alt="Flat" className="flat" /> : ""}
            </div>
        );
    }
}