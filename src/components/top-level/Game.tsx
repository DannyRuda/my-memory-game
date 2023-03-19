import { GameSection } from "./../deep/GameSection";
import { Scores } from "./../deep/Scores";
import { Outlet } from "react-router-dom";
import { useState, useRef } from "react";
import shuffleCards from "../../logic/shuffle-cards";
import { cardObjects } from "../../logic/card-object-creation";
import { Card } from "../deep/Card";
import { useNavigate } from "react-router-dom";

function Game() {
  const [cards, setCards] = useState(cardObjects);

  const navigate = useNavigate();

  let score = useRef(0);

  let highscore = Number(
    localStorage.getItem("highscore")
      ? JSON.parse(localStorage.getItem("highscore"))
      : 0
  );

  const shuffledCards = shuffleCards(cards);

  function handleClick(e) {
    console.log(e.target.id);
    if (!cards.filter((card) => card.title === e.target.id)[0].clicked) {
      score.current++;
      const copyCards = JSON.parse(JSON.stringify(cards));
      const index = copyCards.findIndex((card) => card.title === e.target.id);
      copyCards[index].clicked = true;
      if (!copyCards.filter((card) => !card.clicked)[0]) {
        if (highscore < score.current) {
          highscore = score.current;
          localStorage.setItem("highscore", JSON.stringify(highscore));
        }
        score.current=0;
        navigate("won/");
        setCards(cardObjects);
      }
      setCards(copyCards);
    } else {
      if (highscore < score.current) {
        highscore = score.current;
        localStorage.setItem("highscore", JSON.stringify(highscore));
      }
      score.current = 0;
      navigate("over/");
      setCards(cardObjects);
    }
  }

  const cardComponents = shuffledCards.map((card) => {
    return (
      <Card
        image={card.image}
        shadowColor={card.shadowColor}
        color={card.color}
        title={card.title}
        key={card.title}
        handleClick={handleClick}
      />
    );
  });

  return (
    <>
      <div className="App bg-gradient-to-b from-slate-900 to-slate-700 h-screen">
        <h1>Memory Game</h1>
        <Scores currentScore={score.current} highScore={highscore} />
        <GameSection>{cardComponents}</GameSection>
      </div>
      <Outlet />
    </>
  );
}

export { Game };
