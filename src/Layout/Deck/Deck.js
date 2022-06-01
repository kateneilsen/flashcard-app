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
  }, [deck.id]);

  return (
    <div>
      <div key={deck.id} className="card">
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">{deck.description}</p>
          <button className="btn btn-sm btn-secondary">Edit</button>
          <button className="btn btn-sm btn-primary">Study</button>
          <button className="btn btn-sm btn-primary">Add Cards</button>
        </div>
      </div>
      <h1>Cards</h1>
      <Cards />
    </div>
  );
}

export default Deck;
