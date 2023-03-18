import { GameSection } from "./../deep/GameSection";
import { Scores } from "./../deep/Scores";
import { Outlet } from "react-router-dom";

function Game() {
  return (
    <>
      <div className="App bg-gradient-to-b from-slate-900 to-slate-700 h-screen">
        <h1>Memory Game</h1>
        <Scores currentScore="5" highScore="12" />
        <GameSection />
      </div>
      <Outlet />
    </>
  );
}

export { Game };
