import React from 'react';
import Display from './Display';
import Input from './Input';
import '../App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNote: this.getNote(),
      questionsLeft: this.props.questions,
      score: 0
    };
  }

  handleClick(note) {
    let correctAnswer = this.state.currentNote === note;
    let score = this.state.score;

    if(correctAnswer) {
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

  getNote() {
    return this.props.notes[Math.floor(Math.random() * this.props.notes.length)];
  }
  
  getGame() {
    return (
      <div className="App">
        <div className="Score">
          <p>{this.state.score}/{this.props.questions}</p>
        </div>
        <Display note={this.state.currentNote} />
        <Input notes={this.props.notes} onClick={(note) => this.handleClick(note)} />
      </div>
    );
  }

  getScoreDisplay() {
    return (
      <div className="App">
        <p>Your score is: {this.state.score} / {this.props.questions}</p>
      </div>
    );
  }

  render() {
    return this.state.questionsLeft > 0 ? this.getGame() : this.getScoreDisplay();
  }
}