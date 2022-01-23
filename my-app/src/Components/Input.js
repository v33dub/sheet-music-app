import React from 'react';
import Button from './Button';

export default class Input extends React.Component {
    render() {
        let buttons = this.props.notes.map((note, i) => {
            return <Button key={note} note={note} onClick={() => this.props.onClick(note)} />
        });

        return (
            <div className="Input">
                {buttons}
            </div>
        );
    }
}