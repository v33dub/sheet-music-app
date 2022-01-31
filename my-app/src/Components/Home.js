import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
        <div className="top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave">
                <path data-v-6da3ec0c="" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>

            <div className="center">
                <h1>Learn to read sheet music</h1>
                <p>Select the key that matches the note displayed</p>
            </div>
        </div>
      
        <div className="bottom center">
            <Link to="/game" className="button light">Start quiz</Link>
        </div>
    </div>
  );
}