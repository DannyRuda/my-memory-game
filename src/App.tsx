import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss';
import { Card } from './components/Card';
import { GameSection } from './components/GameSection';
import Boba from './assets/card-pictures/boba.jpg';

function App() {

  return (
    <div className="App bg-gradient-to-b from-slate-900 to-slate-700 h-screen">
      <GameSection />
    </div>
  )
}

export default App
