import React, { useState } from "react";
import { createDeck } from "../../utils/api/index";
import { Link, useHistory } from "react-router-dom";

export default function CreateDeckForm({ decks }) {
  const initialDeckState = {
    id: "",
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
    <div className="container ">
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

      <header>
        <h1>Create Deck</h1>
      </header>
      <form onSubmit={handleSubmit} className="">
        <div>
          <label>
            Name
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={deck.name}
              placeholder="Deck Name"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description
            <textarea
              className="form-control"
              type="textarea"
              rows="4"
              name="description"
              id="description"
              value={deck.description}
              placeholder="Brief description of the deck"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={() => history.push("/")}
          >
            Cancel
          </button>

          <button type="submit" className="btn btn-primary mr-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
