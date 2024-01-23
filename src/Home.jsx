import React, { useEffect, useState } from "react";
import "./App.css";

function Home({ handleStartGame }) {
  const [prevScore, setPrevScore] = useState("-");
  const [highScore, setHighScore] = useState("-");

  useEffect(() => {
    const prevScore = JSON.parse(localStorage.getItem("prevScore"));
    if (prevScore !== null) {
      setPrevScore(prevScore);
    }

    const highScore = JSON.parse(localStorage.getItem("highScore"));
    if (prevScore !== null) {
      setHighScore(highScore);
    }
  }, []);

  return (
    <div className="center-container">
      <h1>Welcome to the Flash Card Game</h1>
      <h3>High Score: {highScore} </h3>
      <h3>Previous Score: {prevScore} </h3>
      <div className="instructions">
        <div>Instructions:</div>
        <ul>
          <li>
            2 random numbers between 0 and 12 will be shown. Enter the product
            of the numbers.
          </li>
          <li>
            If you are correct, you get 1 point. If not, you lose 1 point.
          </li>
          <li>
            You have 1 minute to answer as many questions. The timer will start
            once you click the 'Start' button.
          </li>
        </ul>
      </div>

      <button onClick={handleStartGame}>Start</button>
    </div>
  );
}

export default Home;
