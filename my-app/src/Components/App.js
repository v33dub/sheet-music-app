import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import Note from '../Classes/Note';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<PlayGame />} />
      </Routes>
    </BrowserRouter>
  );
}

function PlayGame() {
  return <Game questions={10} notes={[
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
  />
}