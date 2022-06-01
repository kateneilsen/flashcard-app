import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import Deck from "./Deck/Deck";

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

  const list = decks.map((deck) => <Deck key={deck.id} deck={deck} />);

  return (
    <div className="container">
      <div className="row">{list}</div>
    </div>
  );
}

export default Decks;
