import React, { useState } from "react";
import { createDeck } from "../../utils/api/index";
import CreateDeckNav from "./CreateDeckNav";

function CreateDeckForm({ decks }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck();
    setName("");
    setDescription("");
  };

  return (
    <div>
      <CreateDeckNav />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>

        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <button type="cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateDeckForm;
