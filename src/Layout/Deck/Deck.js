import React, { useEffect } from "react";
import { readDeck } from "../../utils/api";
import Cards from "./Cards";

function Deck({ deck, setDeck }) {
  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      try {
        const response = await readDeck(deck.id, abortController.signal);
        setDeck(response);
      } catch (error) {
        console.log(error);
      }

      return () => {
        abortController.abort();
      };
    }
    loadDeck();
  }, [deck]);

  return (
    <div>
      <h2>Decks</h2>
    </div>
  );
}

export default Deck;
