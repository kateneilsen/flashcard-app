import React from "react";
import { Link, Params, useHistory } from "react-router-dom";

export default function DeckNav({ deck }) {
  const history = useHistory();
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <Link to="/decks/:deckId">{deck.name}</Link>
        </li>
      </ol>
    </nav>
  );
}
