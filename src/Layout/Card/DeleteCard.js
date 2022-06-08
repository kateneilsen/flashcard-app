import React from "react";
import { deleteCard } from "../../utils/api";
import { useHistory } from "react-router-dom";

function DeleteCard({ card }) {
  const history = useHistory();

  const handleDeleteCard = () => {
    const abortController = new AbortController();
    deleteCard(card.id, abortController.signal).then(() => history.go(0));
  };
  return (
    <button
      className="btn btn-danger mr-2 mb-2 mt-4"
      onClick={() =>
        window.confirm(
          "Delete this deck? \n\n You will not be able to recover it."
        )
          ? handleDeleteCard()
          : console.log("You clicked cancel")
      }
    >
      Delete
    </button>
  );
}

export default DeleteCard;
