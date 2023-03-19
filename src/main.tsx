import './App.scss';
import React from "react";
import ReactDOM from "react-dom/client";

import { Menu } from "./components/top-level/Menu";
import Rules from "./components/top-level/Rules";
import GameOver from "./components/top-level/GameOver";
import GameWon from "./components/top-level/GameWon";
import StartPage from "./components/top-level/Start-page";

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.scss";
import { Game } from "./components/top-level/Game";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<StartPage/>} >
        <Route index element={<Menu />} />
        <Route path="rules" element={<Rules />} />
      </Route>
      <Route path="/game/" element={<Game />} >
        <Route path="over" element={<GameOver />} />
        <Route path="won" element={<GameWon />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// <RouterProvider router={router} />