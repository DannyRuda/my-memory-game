import './scores.scss'

function Scores(props) {
    return(<div className="scores">
        <h3>Your Score: {props.currentScore}</h3>
        <h3>High-Score: {props.highScore}</h3>
    </div>)
}

export {Scores}