import React from "react";
import { useParams } from "react-router-dom";

export default function StudyDeck({ decks }) {
  const { deckId } = useParams();
  const deck = decks.find((deck) => deck.id == deckId);
  console.log(deck);
  console.log(deckId);
  return (
    <div>
      <div>{deck?.name}</div>
    </div>
  );
}
