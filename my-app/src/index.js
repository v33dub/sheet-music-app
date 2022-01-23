import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';

ReactDOM.render(
  <App questions={3} />,
  document.getElementById('root')
);