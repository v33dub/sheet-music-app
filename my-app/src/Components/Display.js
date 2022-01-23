import React from 'react';

export default class Display extends React.Component {
    render() {
        return (
            <div className="Display">
                <h1>{this.props.note}</h1>
            </div>
        );
    }
}