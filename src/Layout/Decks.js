import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import DeletePrompt from "./DeletePrompt";
import { useHistory } from "react-router-dom";

function Decks({ decks, setDecks }) {
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDecks() {
      try {
        const response = await listDecks(abortController.signal);
        setDecks(response);
      } catch (error) {
        console.log(error);
      }

      return () => {
        abortController.abort();
      };
    }
    loadDecks();
  }, []);

  const handleDeleteDeck = (idToDelete) => {
    setDecks((currentDecks) => {
      currentDecks.filter((deck) => deck.id !== idToDelete);
    });
  };

  return (
    <div>
      {decks.map((deck) => {
        return (
          <div key={deck.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{deck.name}</h5>
              <p className="card-text">{deck.description}</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => history.push("/decks/:deckId")}
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => history.push("/decks/:deckId/study")}
              >
                Study
              </button>
              <DeletePrompt decks={decks} setDecks={setDecks} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Decks;
