import "./card.scss";
// bg-sky-400
// bg-yellow-300
// shadow-yellow-300
// bg-amber-900
// bg-orange-900
// bg-orange-400 bg-amber-400 bg-yellow-600 bg-yellow-700 bg-emerald-600 bg-emerald-700 bg-red-900 bg-red-300 bg-yellow-400 bg-lime-700
function Card(props) {
  return (
    <div
      className={`${props.color} card`}
      style={{ boxShadow: `0px 4px 6px -1px ${props.shadowColor}` }}
      onMouseEnter={(e) => {
        e.target.style.boxShadow = `0 10px 15px -3px ${props.shadowColor}`;
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = `0 4px 6px -1px ${props.shadowColor}`;
      }}
      onClick={(e)=>props.handleClick(e)}
      id={props.title}
    >
      <img src={props.image} />
      <h2>{props.title}</h2>
    </div>
  );
}

export { Card };
