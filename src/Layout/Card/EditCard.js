import React, { useState, useEffect } from "react";
import { readDeck, readCard } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import CardForm from "./CardForm";

export default function EditCard() {
  const initialCardState = {
    id: "",
    front: "",
    back: "",
    deckId: "",
  };

  const { deckId, cardId } = useParams();

  const [card, setCard] = useState(initialCardState);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadData() {
      try {
        const cardResponse = await readCard(cardId, abortController.signal);
        const deckResponse = await readDeck(deckId, abortController.signal);
        setCard(cardResponse);
        setDeck(deckResponse);
      } catch (error) {
        console.log(error);
      }

      return () => {
        abortController.abort();
      };
    }
    loadData();
  }, [cardId, deckId]);

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
              Edit Card {card.id}
            </li>
          </ol>
        </nav>
      </div>
      <h1>Edit Card</h1>
      <CardForm card={card} />
    </div>
  );
}
