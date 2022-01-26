import React from 'react';
import trebleClef from '../images/trebleClef.png';

export default class Display extends React.Component {
    render() {
        return (
            <div className="Display">
                <div className="staff">
                    <img src={trebleClef} alt="Treble Clef" className="clef" />
                    <div className="line" data-note="f">
                        {this.props.note === "F" ? <div className="note"></div> : ""}
                    </div>
                    <div className="space" data-note="e">
                        {this.props.note === "E" ? <div className="note"></div> : ""}
                    </div>
                    <div className="line" data-note="d">
                        {this.props.note === "D" ? <div className="note"></div> : ""}
                    </div>
                    <div className="space" data-note="c">
                        {this.props.note === "C" ? <div className="note"></div> : ""}
                    </div>
                    <div className="line" data-note="b">
                        {this.props.note === "B" ? <div className="note"></div> : ""}
                    </div>
                    <div className="space" data-note="a">
                        {this.props.note === "A" ? <div className="note"></div> : ""}
                    </div>
                    <div className="line" data-note="g">
                        {this.props.note === "G" ? <div className="note"></div> : ""}
                    </div>
                    <div className="space" data-note="f">
                        {this.props.note === "F" ? <div className="note"></div> : ""}
                    </div>
                    <div className="line" data-note="e">
                        {this.props.note === "E" ? <div className="note"></div> : ""}
                    </div>
                </div>
            </div>
        );
    }
}