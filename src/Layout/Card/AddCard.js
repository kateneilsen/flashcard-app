import React, { useState, useEffect } from "react";
import { createCard, readDeck } from "../../utils/api";
import CardNav from "./CardNav";
import { useHistory, useParams } from "react-router-dom";

export default function AddCard() {
  const initialCardState = {
    front: "",
    back: "",
  };

  const history = useHistory();
  const { deckId } = useParams();

  const [card, setCard] = useState({ ...initialCardState });

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

  const handleChange = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createCard(deckId, card);
    setCard({ ...initialCardState });
  }

  return (
    <div>
      <CardNav />
      <h2>{deck.name}: Add Card</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="front" className="form-label">
            Front
          </label>
          <textarea
            className="form-control"
            type="text"
            name="front"
            id="front"
            onChange={handleChange}
            value={card.front}
            rows="2"
          />
        </div>
        <div className="mb-3">
          <label for="back" className="form-label">
            Back
          </label>
          <textarea
            className="form-control"
            type="text"
            name="back"
            id="back"
            onChange={handleChange}
            value={card.back}
            rows="2"
          />
        </div>
        <div>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => history.push(`/decks/${deckId}`)}
          >
            Done
          </button>
          <button type="submit" className="btn btn-sm btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
