import React from "react";
import { useParams } from "react-router-dom";
import StudyNav from "./StudyNav";

export default function StudyDeck({ decks }) {
  const { deckId } = useParams();
  const deck = decks.find((deck) => deck.id == deckId);
  console.log(deck);
  console.log(deckId);
  return (
    <div>
      <StudyNav deck={deck} />

      <h1>Study: {deck?.name}</h1>
    </div>
  );
}
