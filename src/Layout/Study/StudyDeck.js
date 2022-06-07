import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StudyNav from "./StudyNav";
import Flashcard from "./Flashcard";
import { readDeck } from "../../utils/api";

export default function StudyDeck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });

  const [cardIndex, setCardIndex] = useState(0);

  const handleCardIndex = () => {
    const next = cardIndex + 1 === cards.length ? 0 : cardIndex + 1;
    console.log(next);
    setCardIndex(next);
  };

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      try {
        const response = await readDeck(deckId, abortController.signal);
        console.log(response);
        setDeck(response);
      } catch (error) {
        console.log(error);
      }

      return () => {
        abortController.abort();
      };
    }
    loadDeck();
  }, [deckId]);

  console.log(deck);
  console.log(deckId);
  const cards = deck.cards;
  console.log(cards);

  return (
    <div>
      <StudyNav deck={deck} />
      <h1>Study: {deck?.name}</h1>
      <div>
        <Flashcard card={cards[cardIndex]} setCardIndex={setCardIndex} />
      </div>
    </div>
  );
}
