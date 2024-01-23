import { useState } from "react";
import Game from "./Game";
import Countdown from "react-countdown";
import Home from "./Home";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);

  const handleStartGame = () => {
    setStart(true);
  };

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      // Render a completed state
      const prevScore = JSON.parse(localStorage.getItem("prevScore"));
      const highScore = JSON.parse(localStorage.getItem("highScore"));
      if (highScore === null) {
        localStorage.setItem("highScore", JSON.stringify(prevScore));
      } else {
        if (prevScore > highScore) {
          localStorage.setItem("highScore", JSON.stringify(prevScore));
        }
      }
      setStart(false);
    } else {
      // Render a countdown
      return (
        <div className="center-container">
          <h3>Time remaining: {seconds} seconds</h3>
          <Game />
        </div>
      );
    }
  };

  return start ? (
    <Countdown date={Date.now() + 60000} renderer={renderer} />
  ) : (
    <Home handleStartGame={handleStartGame} />
  );
}

export default App;
