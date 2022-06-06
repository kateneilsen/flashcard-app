import React, { useState, useEffect } from "react";
import { readDeck, updateDeck } from "../../utils/api";
import DeckNav from "./DeckNav";
import { useParams, useHistory } from "react-router-dom";

export default function EditDeck() {
  const history = useHistory();
  const deckId = useParams();

  const initialDeckState = {
    id: "",
    name: "",
    description: "",
  };

  const [deck, setDeck] = useState({ ...initialDeckState });

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

  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const abortController = new AbortController();
    const response = await updateDeck({ ...deck }, abortController.signal);
    history.push(`/decks/${deckId}`);
    return response;
  }

  async function handleCancel() {
    history.push(`decks/${deckId}`);
  }

  return (
    <div>
      <h1>Edit Deck</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={deck.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="text"
            name="description"
            id="description"
            value={deck.description}
            onChange={handleChange}
          />
        </label>

        <div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
