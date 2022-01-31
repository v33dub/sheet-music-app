import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/game">Start</Link>
    </div>
  );
}