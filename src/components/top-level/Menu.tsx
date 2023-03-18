import { ButtonSection } from "../deep/ButtonSection"
import { Button } from "../deep/Button"
import { Popup } from "../deep/Popup"
import {Link} from 'react-router-dom'


function Menu(props) {
    return (<>
        <Popup>
            <h2>Memory Game</h2>
            <ButtonSection>
                <Button color="bg-sky-300" to="game/">Start Game</Button>
                <Button color="bg-amber-800" to="rules/" >Rules</Button>
                <Button color="bg-orange-500" github="https://github.com/DannyRuda/my-memory-game" >Star this Project</Button>
            </ButtonSection>
        </Popup>
    </>)
}

export {Menu}