import "./button.scss";
import { Link } from "react-router-dom";

function Button(props) {
  if (!props.github) {
    return (
      <Link to={props.to}>
        <button className={props.color}>{props.children}</button>
      </Link>
    );
  } else {
    return (
      <a href={props.github}>
        <button className={props.color}>{props.children}</button>
      </a>
    );
  }
}

export { Button };
