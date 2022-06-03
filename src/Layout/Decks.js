import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import Popup from "./Popup";

function Decks({ decks, setDecks }) {
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

  return (
    <div>
      {decks.map((deck) => {
        return (
          <div key={deck.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{deck.name}</h5>
              <p className="card-text">{deck.description}</p>
              <button type="button" className="btn btn-secondary">
                View
              </button>
              <button type="button" className="btn btn-primary">
                Study
              </button>
              <Popup decks={decks} setDecks={setDecks} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Decks;
