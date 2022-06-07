import React, { useState } from "react";

export default function Flashcard({ card, setCardIndex }) {
  const [flipped, setFlipped] = useState(false);
  const nextCard = () => {
    setCardIndex((index) => index + 1);
    setFlipped(false);
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <p className="card-text">{flipped ? card?.back : card?.front} </p>
          <button
            className="btn btn-small btn-secondary"
            onClick={() => setFlipped(!flipped)}
          >
            Flip
          </button>

          {flipped && <button onClick={nextCard}>Next</button>}
        </div>
      </div>
    </div>
  );
}
