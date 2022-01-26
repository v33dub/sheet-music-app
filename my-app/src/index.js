import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';

ReactDOM.render(
  <App questions={3} notes={["E4", "F4", "G4", "A5", "B5", "C5", "D5"]} />,
  document.getElementById('root')
);