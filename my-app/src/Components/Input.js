import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <div className="Input">
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("C4")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("C#")}></button>
                </div>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("D4")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("D#")}></button>
                </div>

                <button className="key" onClick={() => this.props.onClick("E4")}></button>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("F4")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("F#")}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("G4")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("G#")}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("A5")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("A#")}></button>
                </div>
                
                <button className="key" onClick={() => this.props.onClick("B5")}></button>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("C5")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("C#")}></button>
                </div>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("D5")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("D#")}></button>
                </div>

                <button className="key" onClick={() => this.props.onClick("E5")}></button>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("F5")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("F#")}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("G5")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("G#")}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("A6")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("A#")}></button>
                </div>
                
                <button className="key" onClick={() => this.props.onClick("B6")}></button>
            </div>
        );
    }
}