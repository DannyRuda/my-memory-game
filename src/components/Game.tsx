import { GameSection } from "./GameSection";
import { Scores } from "./Scores";

function Game() {
  return (
    <>
      <h1>Memory Game</h1>
      <Scores currentScore="5" highScore="12" />
      <GameSection />
    </>
  );
}

export {Game}