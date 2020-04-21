import React from "react";
import "./scoreboard.css";

function Scoreboard(props) {
  return (
    <header className="scoreB">
      <div>
      <h4 id="current-score">High Score: {props.topScore}</h4>
        <h4 id="high-score">Current Score: {props.score}</h4>
      <h1>Memory Game</h1>
        <h2>Click on a Star Wars character, but don't click it more than once!</h2>

      </div>
 
    </header>
  );
}

export default Scoreboard;