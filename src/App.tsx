import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss';
import { Card } from './components/Card';

function App() {

  return (
    <div className="App bg-gradient-to-b from-slate-900 to-slate-700 h-screen">
      <Card text="Do scss and tailwind work together" />
    </div>
  )
}

export default App
