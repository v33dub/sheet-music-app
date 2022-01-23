import React from 'react';
import Game from './Game';
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

  getNotes() {
    return ["A", "B", "C"];
  }

  getNote() {
    const notes = this.getNotes();
    return notes[Math.floor(Math.random() * notes.length)];
  }
  
  getGame() {
    return <Game 
      score={this.state.score} 
      questions={this.props.questions} 
      note={this.state.currentNote} 
      notes={this.getNotes()} 
      onClick={(note) => this.handleClick(note)}
    />
  }

  getScoreDisplay() {
    return (
      <div>
        <p>Your score is: {this.state.score} / {this.props.questions}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.questionsLeft > 0 ? this.getGame() : this.getScoreDisplay()}
      </div>
    );
  }
}