import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED, RESULTS_STRINGS } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function checkResult(guesses, answer) {
  if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
    return RESULTS_STRINGS.lost;
  }
  if (guesses.slice(-1)[0].text === answer) {
    return RESULTS_STRINGS.win;
  }
  return null;
}

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState(null);

  function handleNewGuess(nextGuess) {
    const nextGuessObject = {
      text: nextGuess,
      id: crypto.randomUUID(),
    };
    const nextGuesses = [...guesses];
    const result = checkResult(nextGuesses, answer);

    nextGuesses.push(nextGuessObject);

    setGuesses(nextGuesses);
    setResult(result);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        onNewGuess={handleNewGuess}
        result={result}
        guesses={guesses}
        answer={answer}
      />
    </>
  );
}

export default Game;
