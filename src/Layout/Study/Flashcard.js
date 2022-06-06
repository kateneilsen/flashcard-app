import React, { useState } from "react";

export default function Flashcard({ cards, card, index }) {
  const [flipped, setFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const handleCardIndex = () => {
    const next = cardIndex + 1 === cards.length ? 0 : cardIndex + 1;
    console.log(next);
    setCardIndex(next);
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <p>flashcard front</p>
        </div>
      </div>
    </div>
  );
}
