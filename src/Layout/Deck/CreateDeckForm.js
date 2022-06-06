import React, { useState } from "react";
import { createDeck } from "../../utils/api/index";
import CreateDeckNav from "./CreateDeckNav";
import { useHistory } from "react-router-dom";

function CreateDeckForm({ decks }) {
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");

  const initialFormState = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const history = useHistory();

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    setFormData({ ...initialFormState });
    history.push("/decks/:deckId");
  };

  // const handleCancel = (event) => {
  //   event.preventDefault();
  //   history.push("/");
  // };

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
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

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

export default CreateDeckForm;
