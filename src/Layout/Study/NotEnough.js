import React from "react";
import { Link } from "react-router-dom";

function NotEnough({ deckId }) {
  return (
    <div>
      <h1>Not enough cards.</h1>
      <p>You need at least 3 cards to study. There are 2 cards in this deck.</p>
      <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary ">
        Add Cards
      </Link>
    </div>
  );
}

export default NotEnough;
