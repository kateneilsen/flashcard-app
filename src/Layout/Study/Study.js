import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StudyNav from "./StudyNav";
import Flashcard from "./Flashcard";
import { readDeck } from "../../utils/api";
import NotEnough from "./NotEnough";

export default function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });

  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      try {
        const response = await readDeck(deckId, abortController.signal);
        // console.log(response);
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

  // console.log(deck);
  // console.log(deckId);
  const cards = deck.cards;
  // console.log(cards);

  return (
    <div>
      <StudyNav deck={deck} deckId={deckId} />
      {cards.length < 3 ? (
        <div>
          <NotEnough deckId={deckId} />
        </div>
      ) : (
        <div>
          <h1>Study: {deck?.name}</h1>
          <h5 className="card-title">
            Card {cardIndex + 1} of {cards.length}
          </h5>
          <Flashcard
            card={cards[cardIndex]}
            cardIndex={cardIndex}
            setCardIndex={setCardIndex}
            cards={cards}
          />
        </div>
      )}
    </div>
  );
}
