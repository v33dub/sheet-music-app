import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Note from './Classes/Note';
import './index.css';

ReactDOM.render(
  <App questions={10} notes={[
      new Note("E", 4, false, true),
      new Note("E", 4, false, false),
      new Note("F", 4, false, false),
      new Note("F", 4, true, false),
      new Note("G", 4, false, true),
      new Note("G", 4, false, false),
      new Note("G", 4, true, false),
      new Note("A", 5, false, true),
      new Note("A", 5, false, false),
      new Note("A", 5, true, false),
      new Note("B", 5, false, true),
      new Note("B", 5, false, false),
      new Note("C", 5, false, false),
      new Note("C", 5, true, false),
      new Note("D", 5, false, true),
      new Note("D", 5, false, false),
      new Note("D", 5, true, false),
      new Note("E", 5, false, true),
      new Note("E", 5, false, false),
      new Note("F", 5, false, false),
      new Note("F", 5, true, false),
    ]} 
  />,
  document.getElementById('root')
);