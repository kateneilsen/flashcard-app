import React, { useState, useEffect } from "react";
import { deleteDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

export default function DeletePrompt({ decks, setDecks, handleDeleteDeck }) {
  const history = useHistory();

  // const handleDelete = (event) => {
  //   event.preventDefault();
  //   window.confirm("Delete this deck? You will not be able to recover it.")
  //     ? deleteDeck(deckId)
  //     : history.push("/");
  // };

  return (
    <button className="btn btn-danger" onClick={()=>}>
      Delete
    </button>
  );
}
