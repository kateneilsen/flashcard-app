import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Flashcard({ cards, card, cardIndex, setCardIndex }) {
  const history = useHistory();
  const [flipped, setFlipped] = useState(false);
  const nextCard = () => {
    if (cardIndex === cards.length - 1) {
      window.confirm(
        "Restart cards? \n\n Click 'cancel' to return to the home page."
      )
        ? setCardIndex(() => 0)
        : history.push("/");
    } else {
      setCardIndex((cardIndex) => cardIndex + 1);
      setFlipped(() => !flipped);
    }
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <p className="card-text">{flipped ? card?.back : card?.front}</p>
          <button
            className="btn btn-small btn-secondary"
            onClick={() => setFlipped(!flipped)}
          >
            Flip
          </button>
          {flipped && (
            <button className="btn btn-primary" onClick={nextCard}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
