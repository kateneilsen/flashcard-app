import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";

function Decks({ decks, setDecks }) {
  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then((response) => console.log(response));

    return () => abortController.abort();
  }, []);

  return (
    <ul>
      {decks.map((deck) => (
        <li key={deck.id}>{deck}</li>
      ))}
    </ul>
  );
}

export default Decks;
