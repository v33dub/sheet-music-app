import React from 'react';
import trebleClef from '../images/trebleClef.png';

export default class Display extends React.Component {
    render() {
        return (
            <div className="Display">
                <div className="staff">
                    <img src={trebleClef} alt="Treble Clef" className="clef" />
                    <div className="line" data-note="F5">
                        {this.props.note === "F5" ? <div className="note"></div> : ""}
                    </div>
                    <div className="space" data-note="E5">
                        {this.props.note === "E5" ? <div className="note"></div> : ""}
                    </div>
                    <div className="line" data-note="D5">
                        {this.props.note === "D5" ? <div className="note"></div> : ""}
                    </div>
                    <div className="space" data-note="C5">
                        {this.props.note === "C5" ? <div className="note"></div> : ""}
                    </div>
                    <div className="line" data-note="B5">
                        {this.props.note === "B5" ? <div className="note"></div> : ""}
                    </div>
                    <div className="space" data-note="A5">
                        {this.props.note === "A5" ? <div className="note"></div> : ""}
                    </div>
                    <div className="line" data-note="G4">
                        {this.props.note === "G4" ? <div className="note"></div> : ""}
                    </div>
                    <div className="space" data-note="F4">
                        {this.props.note === "F4" ? <div className="note"></div> : ""}
                    </div>
                    <div className="line" data-note="E4">
                        {this.props.note === "E4" ? <div className="note"></div> : ""}
                    </div>
                </div>
            </div>
        );
    }
}