import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <div className="Input">
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("C4")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("C#4/Db4")}></button>
                </div>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("D4")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("D#4/Eb4")}></button>
                </div>

                <button className="key" onClick={() => this.props.onClick("E4")}></button>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("F4")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("F#4/Gb4")}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("G4")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("G#4/Ab5")}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("A5")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("A#5/Bb5")}></button>
                </div>
                
                <button className="key" onClick={() => this.props.onClick("B5")}></button>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("C5")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("C#5/Db5")}></button>
                </div>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("D5")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("D#5/Eb5")}></button>
                </div>

                <button className="key" onClick={() => this.props.onClick("E5")}></button>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("F5")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("F#5/Gb5")}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("G5")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("G#5/Ab6")}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("A6")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("A#6/Bb6")}></button>
                </div>
                
                <button className="key" onClick={() => this.props.onClick("B6")}></button>
            </div>
        );
    }
}