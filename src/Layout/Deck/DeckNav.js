import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";

export default function DeckNav({ deck, deckId }) {
  const history = useHistory();
  // const { deckId } = useParams();
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          <Link to="/decks/:deckId">{deck?.name}</Link>
        </li>
      </ol>
    </nav>
  );
}
