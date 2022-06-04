import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { useParams } from "react-router-dom";
import DeckNav from "./CreateDeckNav";

function Deck() {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();

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

  if (deckId) {
    return (
      <div>
        <DeckNav />

        <div key={deck.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{deck.name}</h5>
            <p className="card-text">{deck.description}</p>
          </div>
          <button className="btn btn-secondary">Edit</button>
          <button className="btn btn-primary">Study</button>
          <button className="btn btn-primary">Add Cards</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
  return "Loading...";
}

export default Deck;
