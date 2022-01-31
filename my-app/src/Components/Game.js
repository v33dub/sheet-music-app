import React from 'react';
import Display from './Display';
import Input from './Input';
import '../App.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNote: this.getNote(),
      questionsLeft: this.props.questions,
      score: 0
    };
  }

  handleClick(pianoKey) {
    let score = this.state.score;

    if(this.isSameNote(pianoKey)) {
      console.log("Correct!");
      score++;
    } else {
      console.log("Incorrect");
    }

    this.setState({
      currentNote: this.getNote(),
      questionsLeft: this.state.questionsLeft - 1,
      score: score
    });
  }

  isSameNote(pianoKey) {
    return pianoKey.find(note => 
      note.letter === this.state.currentNote.letter && 
      note.octave === this.state.currentNote.octave &&
      note.isSharp === this.state.currentNote.isSharp &&
      note.isFlat === this.state.currentNote.isFlat
    );
  }

  getNote() {
    return this.props.notes[Math.floor(Math.random() * this.props.notes.length)];
  }
  
  getGame() {
    return (
      <div className="Game">
        <div className="Score">
          <p>{this.state.score}/{this.props.questions}</p>
        </div>
        <Display note={this.state.currentNote} />
        <Input onClick={(pianoKey) => this.handleClick(pianoKey)} />
      </div>
    );
  }

  getScoreDisplay() {
    return (
      <div className="Game">
        <p>Your score is: {this.state.score} / {this.props.questions}</p>
      </div>
    );
  }

  render() {
    return this.state.questionsLeft > 0 ? this.getGame() : this.getScoreDisplay();
  }
}