import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <div className="Input">
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("C")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("C#")}></button>
                </div>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("D")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("D#")}></button>
                </div>

                <button className="key" onClick={() => this.props.onClick("E")}></button>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("F")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("F#")}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("G")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("G#")}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick("A")}></button>
                    <button className="key sharp" onClick={() => this.props.onClick("A#")}></button>
                </div>
                
                <button className="key" onClick={() => this.props.onClick("B")}></button>
            </div>
        );
    }
}