import { ButtonSection } from "../deep/ButtonSection"
import { Button } from "../deep/Button"
import { Popup } from "../deep/Popup"
import {Link} from 'react-router-dom'

export default function GameOver(props) {
  return (
    <>
      <Popup>
        <h2>Game Over</h2>
        <p>You Clicked this Card already!</p>
        <ButtonSection>
          <Button color="bg-sky-300" to="../">
            Start again
          </Button>
          <Button color="bg-amber-800" to="/rules/">
            Rules
          </Button>
          <Button
            color="bg-orange-500"
            github="https://github.com/DannyRuda/my-memory-game"
          >
            Star this Project
          </Button>
        </ButtonSection>
      </Popup>
    </>
  );
}
