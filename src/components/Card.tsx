import './card.scss'
// bg-sky-400
// bg-yellow-300
// shadow-yellow-300
function Card(props) {
    return (
        <div className={`bg-${props.color} shadow-md shadow-${props.color} hover:shadow-lg hover:shadow-${props.color} card`}>
            <img src={props.image} />
            <h2>{props.title}</h2>
        </div>
    )
} 

export {Card}