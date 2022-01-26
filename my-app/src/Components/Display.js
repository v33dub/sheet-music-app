import React from 'react';
import Note from './Note';
import trebleClef from '../images/trebleClef.png';

export default class Display extends React.Component {
    render() {
        let notes = ["E4", "F4", "G4", "A5", "B5", "C5", "D5", "E5", "F5"].reverse();
        let keys = notes.map((note, i) => {
            return (
                <div className={i % 2 === 0 ? "line" : "space"} data-note={note}>
                    {this.props.note === note ? <Note note={this.props.note} /> : ""}
                </div>
            );
        });

        return (
            <div className="Display">
                <div className="staff">
                    <img src={trebleClef} alt="Treble Clef" className="clef" />
                    {keys}
                </div>
            </div>
        );
    }
}