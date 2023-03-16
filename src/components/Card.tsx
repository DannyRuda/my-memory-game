import "./card.scss";
// bg-sky-400
// bg-yellow-300
// shadow-yellow-300
function Card(props) {
  return (
    <div
      className={`bg-${props.color} card`}
      style={{ boxShadow: `0px 4px 6px -1px ${props.shadowColor}` }}
      onMouseEnter={(e) => {
        e.target.style.boxShadow = `0 10px 15px -3px ${props.shadowColor}`;
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = `0 4px 6px -1px ${props.shadowColor}`;
      }}
    >
      <img src={props.image} />
      <h2>{props.title}</h2>
    </div>
  );
}

export { Card };
