import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import CardForm from "./CardForm";

export default function AddCard() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState({ deckId });

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      try {
        const response = await readDeck(deckId, abortController.signal);
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
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck?.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          </ol>
        </nav>
      </div>
      <h2>{deck.name}: Add Card</h2>
      <CardForm />
    </div>
  );
}
