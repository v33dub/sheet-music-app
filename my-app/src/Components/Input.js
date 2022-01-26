import React from 'react';
import Note from '../Classes/Note';

export default class Input extends React.Component {
    render() {
        return (
            <div className="Input">
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick([
                        new Note("C", 4, false, false)
                    ])}></button>
                    <button className="key sharp" onClick={() => this.props.onClick([
                        new Note("C", 4, true, false),
                        new Note("D", 4, false, true)
                    ])}></button>
                </div>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick([
                        new Note("D", 4, false, false)
                    ])}></button>
                    <button className="key sharp" onClick={() => this.props.onClick([
                        new Note("D", 4, true, false),
                        new Note("E", 4, false, true)
                    ])}></button>
                </div>

                <button className="key" onClick={() => this.props.onClick([
                    new Note("E", 4, false, false)
                ])}></button>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick([
                        new Note("F", 4, false, false)
                    ])}></button>
                    <button className="key sharp" onClick={() => this.props.onClick([
                        new Note("F", 4, true, false),
                        new Note("G", 4, false, true)
                    ])}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick([
                        new Note("G", 4, false, false)
                    ])}></button>
                    <button className="key sharp" onClick={() => this.props.onClick([
                        new Note("G", 4, true, false),
                        new Note("A", 5, false, true)
                    ])}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick([
                        new Note("A", 5, false, false)
                    ])}></button>
                    <button className="key sharp" onClick={() => this.props.onClick([
                        new Note("A", 5, true, false),
                        new Note("B", 5, false, true)
                    ])}></button>
                </div>
                
                <button className="key" onClick={() => this.props.onClick([
                    new Note("B", 5, false, false)
                ])}></button>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick([
                        new Note("C", 5, false, false)
                    ])}></button>
                    <button className="key sharp" onClick={() => this.props.onClick([
                        new Note("C", 5, true, false),
                        new Note("D", 5, false, true)
                    ])}></button>
                </div>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick([
                        new Note("D", 5, false, false)
                    ])}></button>
                    <button className="key sharp" onClick={() => this.props.onClick([
                        new Note("D", 5, true, false),
                        new Note("E", 5, false, true)
                    ])}></button>
                </div>

                <button className="key" onClick={() => this.props.onClick([
                    new Note("E", 5, false, false)
                ])}></button>

                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick([
                        new Note("F", 5, false, false)
                    ])}></button>
                    <button className="key sharp" onClick={() => this.props.onClick([
                        new Note("F", 5, true, false),
                        new Note("G", 5, false, true)
                    ])}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick([
                        new Note("G", 5, false, false)
                    ])}></button>
                    <button className="key sharp" onClick={() => this.props.onClick([
                        new Note("G", 5, true, false),
                        new Note("A", 6, false, true)
                    ])}></button>
                </div>
                
                <div className="keyGroup">
                    <button className="key" onClick={() => this.props.onClick([
                        new Note("A", 6, false, false)
                    ])}></button>
                    <button className="key sharp" onClick={() => this.props.onClick([
                        new Note("A", 6, true, false),
                        new Note("B", 6, false, true)
                    ])}></button>
                </div>
                
                <button className="key" onClick={() => this.props.onClick([
                    new Note("B", 6, false, false)
                ])}></button>
            </div>
        );
    }
}