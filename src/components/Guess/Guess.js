import React from "react";
import { NUM_OF_LETTERS } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  function getLettersObjects(guess, answer) {
    const results = checkGuess(guess, answer);
    const letters = [];
    range(NUM_OF_LETTERS).forEach((_, index) => {
      const letterObject = {
        letter: guess.length > 0 ? guess[index] : " ",
        id: crypto.randomUUID(),
        statusClass: results !== null ? results[index]?.status : null,
      };

      letters.push(letterObject);
    });

    return letters;
  }

  const letters = getLettersObjects(guess, answer);

  return (
    <p className="guess">
      {letters.map(({ letter, id, statusClass }) => (
        <span key={id} className={`cell ${statusClass}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
