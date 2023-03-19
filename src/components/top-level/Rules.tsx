import { ButtonSection } from "../deep/ButtonSection"
import { Button } from "../deep/Button"
import { Popup } from "../deep/Popup"
import {Link} from 'react-router-dom'


export default function Rules() {
  return (
    <>
      <Popup>
        <h2>Rules</h2>
        <p>Click each Card exactly once to win</p>
        <p>You lose if you click on a card that you already clicked once in the current round</p>
        <p>After each clicked card, the cards are shuffeled and new cards may appear</p>
        <ButtonSection>
          <Button color="bg-sky-300" to="/">
            Got it
          </Button>
        </ButtonSection>
      </Popup>
    </>
  );
}
