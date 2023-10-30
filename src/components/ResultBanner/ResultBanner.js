import React from "react";

function ResultBanner({ result, answer, guesses }) {
  console.log("ResultBanner", { result });
  let banner = null;
  if (result === "win") {
    banner = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {guesses.length} guess{guesses.length > 1 ? "es" : null}
          </strong>
          .
        </p>
      </div>
    );
  } else if (result === "lost") {
    banner = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
  return banner;
}

export default ResultBanner;
