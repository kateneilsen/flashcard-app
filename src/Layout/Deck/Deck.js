import React, { useState, useEffect } from "react";
import { readDeck, deleteDeck } from "../../utils/api";
import { Link, useHistory, useParams } from "react-router-dom";
import DeckNav from "./CreateDeckNav";
import DeleteDeck from "./DeleteDeck";

function Deck() {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      try {
        const response = await readDeck(deckId, abortController.signal);
        console.log(response);
        setDeck(response);
      } catch (error) {
        console.log(error);
      }

      return () => {
        abortController.abort();
      };
    }
    loadDeck();
  }, [deckId]);

  return (
    <div>
      <DeckNav />

      <div key={deck.id} className="card">
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">{deck.description}</p>
        </div>
        <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary">
          Edit
        </Link>
        <Link to={`/decks/${deckId}/study`} className="btn btn-primary">
          Study
        </Link>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
          Add Cards
        </Link>
        <DeleteDeck deck={deck} setDeck={setDeck} />
      </div>
    </div>
  );
  return "Loading...";
}

export default Deck;
