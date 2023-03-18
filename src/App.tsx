import './App.scss';
import { Card } from './components/deep/Card';
import { GameSection } from './components/deep/GameSection';
import Boba from './assets/card-pictures/boba.jpg';
import { Button } from './components/deep/Button';
import { ButtonSection } from './components/deep/ButtonSection';
import { Scores } from './components/deep/Scores';
import { Game } from './components/top-level/Game';
import { Popup } from './components/deep/Popup';

function App() {

  return (
    <div className="App bg-gradient-to-b from-slate-900 to-slate-700 h-screen">
      <Game />
      <Popup><h2>Memory Game</h2><ButtonSection /></Popup>
    </div>
  )
}

export default App
