import React, { useState } from "react";
import CardNav from "./CardNav";

export default function AddCard({ deck }) {
  const initialFormState = {
    front: "",
    back: "",
  };

  const [cardData, setCardData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setCardData({
      ...cardData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", cardData);
    setCardData({ ...initialFormState });
  };

  return (
    <div>
      <CardNav />

      <form onSubmit={handleSubmit}>
        <label htmlFor="front">
          Front
          <textarea
            type="text"
            name="front"
            onChange={handleChange}
            value={cardData.front}
          />
        </label>
        <label htmlFor="back">
          Back
          <textarea
            type="text"
            name="back"
            onChange={handleChange}
            value={cardData.back}
          />
        </label>
        <button className="btn btn-sm btn-secondary">Done</button>
        <button className="btn btn-sm btn-primary">Save</button>
      </form>
    </div>
  );
}
