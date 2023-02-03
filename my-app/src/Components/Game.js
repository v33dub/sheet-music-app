import React from 'react';
import Display from './Display';
import Input from './Input';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNote: this.getNote(),
      currentQuestion: 1,
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
      currentQuestion: this.state.currentQuestion + 1,
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
          <div className="score-item">
            <h4>Question:</h4>
            <p>{this.state.currentQuestion}/{this.props.questions}</p>
          </div>
          
          <div className="score-item">
            <h4>Score:</h4>
            <p>{this.state.score} <span className="correct">✔</span></p>
            <p>{this.state.currentQuestion - this.state.score - 1} <span className="incorrect">✖</span></p>
          </div>
        </div>
        <div className="core">
          <Display note={this.state.currentNote} />
          <Input onClick={(pianoKey) => this.handleClick(pianoKey)} />
        </div>
        <div className="background">
            <div className="top">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="wave">
                <path d="M0,96L120,128C240,160,480,224,720,224C960,224,1200,160,1320,128L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
              </svg>
            </div>
            <div className="bottom"></div>
        </div>
      </div>
    );
  }

  getScoreDisplay() {
    return (
      <div className="Game">
        <p className="FinalScore">Your score is: {this.state.score} / {this.props.questions}</p>
      </div>
    );
  }

  render() {
    return this.state.currentQuestion <= this.props.questions ? this.getGame() : this.getScoreDisplay();
  }
}