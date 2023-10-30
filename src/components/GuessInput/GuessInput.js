import React, { useState } from "react";
import ResultBanner from "../ResultBanner/ResultBanner";
import { RESULTS_STRINGS } from "../../constants";

function GuessInput({ onNewGuess, guesses, result, answer }) {
  const [guess, setGuess] = useState("");

  /** @type {import('react').FormEventHandler} */
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const nextGuess = data.get("guess-input").toUpperCase();
    onNewGuess(nextGuess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <ResultBanner answer={answer} result={result} guesses={guesses} />
      <input
        id="guess-input"
        type="text"
        name="guess-input"
        placeholder="Enter guess"
        required
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5,5}"
        title="Enter a 5-letter word"
        aria-label="Enter a 5-letter word"
        disabled={result === RESULTS_STRINGS.lost}
        aria-disabled={result === RESULTS_STRINGS.lost}
      />
    </form>
  );
}

export default GuessInput;
