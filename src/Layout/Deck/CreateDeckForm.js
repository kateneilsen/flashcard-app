import React, { useState } from "react";
import { createDeck } from "../../utils/api/index";
import { Link, useHistory } from "react-router-dom";

export default function CreateDeckForm({ decks }) {
  const initialDeckState = {
    name: "",
    description: "",
  };

  const [deck, setDeck] = useState({ ...initialDeckState });

  const history = useHistory();

  const handleChange = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createDeck(deck);
    history.push(`/decks/${response.id}`);
  }

  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Deck
            </li>
          </ol>
        </nav>
      </div>
      <h1>Create Deck</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={deck.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="description">
            Description
            <textarea
              className="form-control"
              type="text"
              rows="4"
              name="description"
              id="description"
              value={deck.description}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => history.push("/")}
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
