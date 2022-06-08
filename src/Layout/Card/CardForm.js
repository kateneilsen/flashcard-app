import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { updateCard, createCard } from "../../utils/api";

export default function CardForm({ card }) {
  const [cards, setCards] = useState([]);
  const { deckId } = useParams();
  const history = useHistory();

  function handleChange({ target }) {
    if (card) {
      setCards({
        ...card,
        [target.name]: target.value,
      });
    } else {
      setCards({
        ...cards,
        [target.name]: target.value,
      });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const abortController = new AbortController();
    if (card) {
      const response = await updateCard({ ...card }, abortController.signal);
      history.push(`/decks/${deckId}`);
      return response;
    } else {
      const response = await createCard(
        deckId,
        { ...cards },
        abortController.signal
      );
      history.push(`/decks/${deckId}`);
      return response;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {card ? (
          <div>
            <div className="form-group">
              <label>Front</label>
              <textarea
                className="form-control"
                type="textarea"
                name="front"
                id="front"
                onChange={handleChange}
                value={card?.front}
                placeholder={card?.front}
                rows="4"
              />
            </div>
            <div className="form-group">
              <label>Back</label>
              <textarea
                className="form-control"
                type="textarea"
                name="back"
                id="back"
                onChange={handleChange}
                value={card.back}
                placeholder={card.back}
                rows="4"
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label>Front</label>
              <textarea
                className="form-control"
                type="textarea"
                name="front"
                id="front"
                onChange={handleChange}
                value={card?.front}
                rows="4"
              />
            </div>
            <div className="form-group">
              <label>Back</label>
              <textarea
                className="form-control"
                type="textarea"
                name="back"
                id="back"
                onChange={handleChange}
                value={card?.back}
                rows="4"
              />
            </div>
          </div>
        )}
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
