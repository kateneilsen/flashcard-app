import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import DeletePrompt from "./DeletePrompt";
import { Link, useHistory, useParams } from "react-router-dom";

function Decks({ decks, setDecks, handleDeleteDeck }) {
  const history = useHistory();
  let { deckId } = useParams();
  console.log({ deckId });

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDecks() {
      try {
        const response = await listDecks(abortController.signal);
        console.log("setDecks:", response);
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
              <Link to={`/decks/${deck.id}`}>View</Link>
              <Link to={`/decks/${deck.id}/study`}>Study</Link>
              <DeletePrompt />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Decks;
