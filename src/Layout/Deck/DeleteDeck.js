import React from "react";
import { deleteDeck } from "../../utils/api";
import { useParams, useHistory } from "react-router-dom";

export default function DeleteDeck({ deckId, decks, setDecks }) {
  const history = useHistory();

  const deleteFunction = () => {
    const abortController = new AbortController();
    deleteDeck(deckId, abortController.signal).then(() => history.push("/"));
  };
  return (
    <button
      className="btn btn-danger"
      onClick={() =>
        window.confirm(
          "Delete this deck? \n\n You will not be able to recover it."
        )
          ? deleteFunction()
          : console.log("You clicked cancel")
      }
    >
      DeleteDeck
    </button>
  );
}
