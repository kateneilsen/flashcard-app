import React, { useState } from "react";
import { readDeck } from "../../utils/api";
import DeckNav from "./DeckNav";
import { useParams, useHistory } from "react-router-dom";

export default function EditDeck({ deck, setDeck }) {
  const [preloadedData, setPreloadedData] = useState({ ...deck });

  const history = useHistory();
  const deckId = useParams();

  const handleChange = ({ target }) => {
    setPreloadedData({
      ...preloadedData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", preloadedData);
    setDeck({ ...preloadedData });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={preloadedData.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="text"
            name="description"
            id="description"
            value={preloadedData.description}
            onChange={handleChange}
          />
        </label>

        <div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => history.push("/decks/:deckId")}
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
