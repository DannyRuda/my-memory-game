import "./button.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
  github?: string;
  to?: string;
  color: string
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  if (!props.github && props.to) {
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
