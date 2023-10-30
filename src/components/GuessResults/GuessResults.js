import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  let nextGuesses = [...guesses];
  if (nextGuesses.length < NUM_OF_GUESSES_ALLOWED) {
    for (
      let index = nextGuesses.length;
      index < NUM_OF_GUESSES_ALLOWED;
      index++
    ) {
      nextGuesses.push({
        text: "",
        id: crypto.randomUUID(),
      });
    }
  }

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => {
        return (
          <Guess
            guess={nextGuesses[index].text}
            key={nextGuesses[index].id}
            answer={answer}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;
