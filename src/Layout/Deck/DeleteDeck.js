import React from "react";
import { deleteDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";

export default function DeleteDeck({ deckId, decks, setDecks }) {
  const history = useHistory();

  async function deleteFunction() {
    const abortController = new AbortController();
    await deleteDeck(deckId, abortController.signal).then(() =>
      history.push("/")
    );
  }
  return (
    <button
      className="btn btn-danger mb-2 "
      onClick={() =>
        window.confirm(
          "Delete this deck? \n\n You will not be able to recover it."
        )
          ? deleteFunction()
          : console.log("You clicked cancel")
      }
    >
      Delete
    </button>
  );
}
