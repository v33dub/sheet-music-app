import React from 'react';
import NoteDisplay from './NoteDisplay';
import Note from '../Classes/Note';
import trebleClef from '../images/trebleClef.png';

export default class Display extends React.Component {
    render() {
        let notes = [
            new Note("E", 4, false, false),
            new Note("F", 4, false, false),
            new Note("G", 4, false, false),
            new Note("A", 5, false, false),
            new Note("B", 5, false, false),
            new Note("C", 5, false, false),
            new Note("D", 5, false, false),
            new Note("E", 5, false, false),
            new Note("F", 5, false, false),
        ].reverse();

        let keys = notes.map((note, i) => {
            return (
                <div className={i % 2 === 0 ? "line" : "space"} data-note={note.letter} key={i}>
                    {this.props.note.letter === note.letter && this.props.note.octave === note.octave ? <NoteDisplay note={this.props.note} /> : ""}
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