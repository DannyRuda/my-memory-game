import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss';
import { Card } from './components/Card';
import { GameSection } from './components/GameSection';
import Boba from './assets/card-pictures/boba.jpg';
import { Button } from './components/Button';
import { ButtonSection } from './components/ButtonSection';
import { Scores } from './components/Scores';
import { Game } from './components/Game';
import { Popup } from './components/Popup';

function App() {

  return (
    <div className="App bg-gradient-to-b from-slate-900 to-slate-700 h-screen">
      <Game />
      <Popup><h2>Memory Game</h2><ButtonSection /></Popup>
    </div>
  )
}

export default App
