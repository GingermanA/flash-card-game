import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function Game() {
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(null);
  const answerRef = useRef(null);
  const num1Ref = useRef(Math.floor(Math.random() * 13));
  const num2Ref = useRef(Math.floor(Math.random() * 13));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answerRef.current.value == num1Ref.current * num2Ref.current) {
      setScore((score) => score + 1);
      setCorrect(true);
      num1Ref.current = Math.floor(Math.random() * 13);
      num2Ref.current = Math.floor(Math.random() * 13);
      answerRef.current.value = null;
    } else {
      setScore((score) => score - 1);
      setCorrect(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("prevScore", JSON.stringify(score));
  }, [score]);

  return (
    <>
      <p className="score">
        Score: {score}{" "}
        {correct === true && <span className="correct">(Correct +1)</span>}
        {correct === false && <span className="incorrect">(Incorrect -1)</span>}
      </p>
      <form onSubmit={handleSubmit}>
        <label for="answer" className="numbers">
          {num1Ref.current} x {num2Ref.current} ={" "}
        </label>
        <input
          type="number"
          id="answer"
          placeholder="0"
          ref={answerRef}
          className="answer-input"
        />
        <br />
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Game;
