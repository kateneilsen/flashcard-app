import React, { useState, useEffect } from "react";
import { readDeck, updateCard, readCard } from "../../utils/api";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import CardNav from "./CardNav";

export default function EditCard() {
  const initialCardState = {
    id: "",
    front: "",
    back: "",
    deckId: "",
  };

  const { deckId, cardId } = useParams();
  const history = useHistory();

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

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const abortController = new AbortController();
    const response = await updateCard({ ...card }, abortController.signal);

    history.push(`/decks/${deckId}`);
    return response;
  }

  async function handleCancel() {
    history.push(`decks/${deckId}`);
  }

  return (
    <div>
      <CardNav />
      <h1>Edit Card</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Front
          </label>
          <textarea
            className="form-control"
            type="text"
            id="front"
            name="front"
            value={card.front}
            onChange={handleChange}
            rows="2"
          />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Back
          </label>
          <textarea
            className="form-control"
            type="text"
            name="back"
            id="back"
            value={card.back}
            onChange={handleChange}
            rows="2"
          />
        </div>

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
