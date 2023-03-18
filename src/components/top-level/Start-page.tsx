import { Card } from "../deep/Card";
import { Game } from "./Game";
import { Outlet } from "react-router-dom";

export default function StartPage(props) {
  return (
    <div className="App bg-gradient-to-b from-slate-900 to-slate-700 h-screen">
      <Game />
      <Outlet />
    </div>
  );
}
