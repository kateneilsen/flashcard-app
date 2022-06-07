import React from "react";
import { deleteCard } from "../../utils/api";
import { useHistory } from "react-router-dom";

function DeleteCard() {
  const history = useHistory();

  const handleDeleteCard = () => {
    const abortController = new AbortController();
    deleteCard(cardId, abortController.signal).then(() => history.push("/"));
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

export default DeleteCard;
