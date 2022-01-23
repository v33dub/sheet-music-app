import React from 'react';
import Display from './Display';
import Input from './Input';

export default class Game extends React.Component {
    render() {
        return (
            <div className="Game">
                <div className="Score">
                    <p>{this.props.score}/{this.props.questions}</p>
                </div>
                <Display note={this.props.note} />
                <Input notes={this.props.notes} onClick={(note) => this.props.onClick(note)} />
            </div>
        );
    }
}