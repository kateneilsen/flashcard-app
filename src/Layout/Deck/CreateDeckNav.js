import React from "react";
import { Link } from "react-router-dom";

function CreateDeckNav() {
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/decks/new">Create Deck</Link>
      </p>
    </div>
  );
}

export default CreateDeckNav;
