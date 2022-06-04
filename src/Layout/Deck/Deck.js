import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";

function Deck({ deckId }) {
  const [deck, setDeck] = useState({});
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

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">{deck.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Deck;
